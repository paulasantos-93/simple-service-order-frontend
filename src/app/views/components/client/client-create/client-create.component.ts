import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent {

  client: Client = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }
  
  name = new FormControl('', [Validators.minLength(5)])
  cpf = new FormControl('', [Validators.minLength(11)])
  phone = new FormControl('', [Validators.minLength(11)])


  constructor(
    private router : Router,
    private service : ClientService) {}


  cancel() : void {
    this.router.navigate(['clients']);
  }

  create(): void {
      this.service.create(this.client).subscribe((answer) => {
      this.router.navigate(['clients'])
      this.service.message('Client created successfully!')
    }, err => {
      if(err.error.error.match('already exists')){
        this.service.message(err.error.error);
    } else if(err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido" ) {
      this.service.message("Invalid CPF!");
    } 
    });
  }

  errorValidName() {
    if(this.name.invalid){
      return 'Name must have 5-10 characters long!';
    }
    return false;
  }

  errorValidCpf() {
    if(this.cpf.invalid){
      return 'CPF must have 11-15 characters long!';
    }
    return false;
  }

  errorValidPhone() {
    if(this.phone.invalid){
      return 'Phone must have 11-18 characters long!';
    }
    return false;
  }


}
