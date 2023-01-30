import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Technic } from 'src/app/models/technic';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-technic-read',
  templateUrl: './technic-read.component.html',
  styleUrls: ['./technic-read.component.css']
})
export class TechnicReadComponent implements AfterViewInit {

  technics: Technic[] = [];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'phone', 'action'];
  dataSource = new MatTableDataSource<Technic>(this.technics);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : TechnicService,
    private router : Router
    ) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((answer) => {
        this.technics = answer;
        this.dataSource = new MatTableDataSource<Technic>(this.technics);
        this.dataSource.paginator = this.paginator;
      });
  }

  navigateToCreate(): void {
    this.router.navigate(['technics/create'])
  }

}


