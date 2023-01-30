import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HomeComponent} from './views/components/home/home.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { HeaderComponent } from './views/components/template/header/header.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { TechnicReadComponent } from './views/components/technic/technic-read/technic-read.component';
import { TechnicCreateComponent } from './views/components/technic/technic-create/technic-create.component';
import { TechnicUpdateComponent } from './views/components/technic/technic-update/technic-update.component';
import { TechnicDeleteComponent } from './views/components/technic/technic-delete/technic-delete.component';
import { ClientReadComponent } from './views/components/client/client-read/client-read.component';
import { ClientCreateComponent } from './views/components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './views/components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './views/components/client/client-delete/client-delete.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import {MatMenuModule} from '@angular/material/menu';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    TechnicReadComponent,
    TechnicCreateComponent,
    TechnicUpdateComponent,
    TechnicDeleteComponent,
    ClientReadComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    OsReadComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    OsClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule, 
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
