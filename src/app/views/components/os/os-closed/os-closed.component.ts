import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { ClientService } from 'src/app/services/client.service';
import { OsService } from 'src/app/services/os.service';
import { TechnicService } from 'src/app/services/technic.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent implements AfterViewInit {

  list: OS[] = [];

  displayedColumns: string[] = ['technic', 'client', 'opening', 'closure', 'priority', 'status', 'action'];
  dataSource = new MatTableDataSource<OS>(this.list);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private service : OsService,
    private router : Router,
    private tecnicoService: TechnicService,
    private clientService: ClientService
    ) {}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((answer) => {
       answer.forEach(x => {
        if(x.status == "CLOSE") {
          this.list.push(x);
        }
       });
        this.listTechcnic();
        this.listClient();
        this.dataSource = new MatTableDataSource<OS>(this.list);
        this.dataSource.paginator = this.paginator;
      });
  }

  listTechcnic(): void {
    this.list.forEach(x => {
      this.tecnicoService.findById(x.technic).subscribe(answer => {
        x.technic = answer.name;
      })
    })
  }

  listClient(): void {
    this.list.forEach(x => {
      this.clientService.findById(x.client).subscribe(answer => {
        x.client = answer.name;
      })
    })
  }

  priority(x : any) {
    if(x == 'LOW') {
      return 'low';
    }
    else if(x == 'MEDIUM') {
      return 'medium';
    }
    return 'high';
  }
 

}
