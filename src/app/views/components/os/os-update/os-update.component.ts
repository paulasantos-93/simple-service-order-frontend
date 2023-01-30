import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/os';
import { Technic } from 'src/app/models/technic';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent {
  
  os: OS = {
    technic: '',
    client: '',
    observations: '',
    status: '',
    priority: ''
  }
  
  technics: Technic[] = [];
  clients: Client[] = [];
  
  constructor(
    private technicService : TechnicService,
    private clientService : ClientService,
    private service: OsService,
    private router: Router,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.os.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.listTechnic();
    this.listClient();
  }

  findById():void {
    this.service.findById(this.os.id).subscribe(answer => {
      this.os = answer;
      this.convertData();
    })
  }
  
  update(): void {
    this.service.update(this.os).subscribe(answer => {
      this.service.message("Service Order updated successfully!");
      this.router.navigate(['os']);
    })
  }
  
  cancel(): void{
    this.router.navigate(['os']);
  }
  
  listTechnic(): void {
    this.technicService.findAll().subscribe(answer => {
      this.technics = answer;
    })
  }
  
  listClient(): void {
    this.clientService.findAll().subscribe(answer => {
      this.clients = answer;
    })
  }

  convertData():void {
    if(this.os.status == "OPEN") {
      this.os.status = 0;
    } else if(this.os.status == 'PROGRESS') {
      this.os.status = 1;
    } else {
      this.os.status = 2;
    }

    if(this.os.priority == 'LOW') {
      this.os.priority = 0;
    } else if(this.os.priority == 'MEDIUM') {
      this.os.priority = 1;
    } else {
      this.os.priority = 2;
    }

  }
  
  
}
