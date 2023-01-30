import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { HomeComponent } from './views/components/home/home.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { TechnicCreateComponent } from './views/components/technic/technic-create/technic-create.component';
import { TechnicDeleteComponent } from './views/components/technic/technic-delete/technic-delete.component';
import { TechnicReadComponent } from './views/components/technic/technic-read/technic-read.component';
import { TechnicUpdateComponent } from './views/components/technic/technic-update/technic-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "technics",
    component: TechnicReadComponent
  },
  {
    path: "technics/create",
    component: TechnicCreateComponent
  },
  {
    path: "technics/update/:id",
    component: TechnicUpdateComponent
  },
  {
    path: "technics/delete/:id",
    component: TechnicDeleteComponent
  },
  {
    path: "clients",
    component: ClientReadComponent
  },
  {
    path: "clients/create",
    component: ClientCreateComponent
  },
  {
    path: "clients/update/:id",
    component: ClientUpdateComponent
  },
  {
    path: "clients/delete/:id",
    component: ClientDeleteComponent
  },
  {
    path: "os",
    component: OsReadComponent
  },
  {
    path: "os/closed",
    component: OsClosedComponent
  },
  {
    path: "os/create",
    component: OsCreateComponent
  },
  {
    path: "os/update/:id",
    component: OsUpdateComponent
  },
  {
    path: "os/view/:id",
    component: OsViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
