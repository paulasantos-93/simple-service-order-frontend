import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { OsService } from 'src/app/services/os.service';

@Component({
  selector: 'app-os-view',
  templateUrl: './os-view.component.html',
  styleUrls: ['./os-view.component.css']
})
export class OsViewComponent {


  os: OS = {
    technic: '',
    client: '',
    observations: '',
    priority: '',
    status: ''
  }

constructor(
  private route: ActivatedRoute,
  private service: OsService,
  private router: Router
) {}

ngOnInit(): void{
  this.os.id = this.route.snapshot.paramMap.get('id');
  this.findById();
}

findById():void {
  this.service.findById(this.os.id).subscribe(answer => {
    this.os = answer;
  })
}

return():void{
  this.router.navigate(['os']);
}


}
