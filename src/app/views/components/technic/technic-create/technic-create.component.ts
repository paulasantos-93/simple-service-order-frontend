import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Technic } from 'src/app/models/technic';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-technic-create',
  templateUrl: './technic-create.component.html',
  styleUrls: ['./technic-create.component.css']
})
export class TechnicCreateComponent {

  technic: Technic = {
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
    private service : TechnicService) {}


  cancel() : void {
    this.router.navigate(['technics']);
  }

  create(): void {
      this.service.create(this.technic).subscribe((answer) => {
      this.router.navigate(['technics'])
      this.service.message('Technic created successfully!')
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
