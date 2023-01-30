import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent {
  
  id_cli = ''

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

  constructor(
    private router : Router,
    private service : ClientService,
    private route: ActivatedRoute) {}
  

  ngOnInit() : void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById():void{
    this.service.findById(this.id_cli).subscribe(answer => {
      this.client = answer;
    })
  }

  delete(): void {
    this.service.delete(this.id_cli).subscribe(answer => {
      this.router.navigate(['clients']);
      this.service.message('Client deleted successfully!')
    }, err => {
      if(err.error.error.match('Client has service orders')){
        this.service.message(err.error.error);
      }
    })
  }
   
  cancel() : void {
    this.router.navigate(['clients']);
  }

}
