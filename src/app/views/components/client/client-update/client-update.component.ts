import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {
  
  id_cli = '';

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
    private service : ClientService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  cancel() : void {
    this.router.navigate(['clients']);
  }

  findById():void {
    this.service.findById(this.id_cli).subscribe(answer => {
      this.client = answer;
    })
  }

  update(): void {
      this.service.update(this.client).subscribe((answer) => {
      this.router.navigate(['clients'])
      this.service.message('Client updated successfully!')
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
