import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technic } from 'src/app/models/technic';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-technic-update',
  templateUrl: './technic-update.component.html',
  styleUrls: ['./technic-update.component.css']
})
export class TechnicUpdateComponent {

  id_tec = ''

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
    private service : TechnicService,
    private route: ActivatedRoute) {}
  

  ngOnInit() : void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void {
    this.service.update(this.technic).subscribe((answer) => {
      this.router.navigate(['technics']);
      this.service.message('Technic updated successfully!');    
    },  err => {
      if(err.error.error.match('already exists')){
        this.service.message(err.error.error);
    } else if(err.error.errors[0].message === "número do registro de contribuinte individual brasileiro (CPF) inválido" ) {
      this.service.message("Invalid CPF!");
    } })
  }


  findById():void{
    this.service.findById(this.id_tec).subscribe(answer => {
      this.technic = answer;
    })
  }
   
  cancel() : void {
    this.router.navigate(['technics']);
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
