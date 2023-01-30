import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technic } from 'src/app/models/technic';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-technic-delete',
  templateUrl: './technic-delete.component.html',
  styleUrls: ['./technic-delete.component.css']
})
export class TechnicDeleteComponent {

  id_tec = ''

  technic: Technic = {
    id: '',
    name: '',
    cpf: '',
    phone: ''
  }

  constructor(
    private router : Router,
    private service : TechnicService,
    private route: ActivatedRoute) {}
  

  ngOnInit() : void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }


  findById():void{
    this.service.findById(this.id_tec).subscribe(answer => {
      this.technic = answer;
    })
  }

  delete(): void {
    this.service.delete(this.id_tec).subscribe(answer => {
      this.router.navigate(['technics']);
      this.service.message('Technic deleted successfully!')
    }, err => {
      if(err.error.error.match('technician has service orders')){
        this.service.message(err.error.error);
      }
    })
  }
   
  cancel() : void {
    this.router.navigate(['technics']);
  }

}
