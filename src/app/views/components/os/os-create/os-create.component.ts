import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { OS } from 'src/app/models/os';
import { Technic } from 'src/app/models/technic';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent {

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
  private router: Router
){}

ngOnInit(): void {
  this.listTechnic();
  this.listClient();
}

create(): void {
  this.service.create(this.os).subscribe(answer => {
    this.service.message("Service Order created successfully!");
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



}
