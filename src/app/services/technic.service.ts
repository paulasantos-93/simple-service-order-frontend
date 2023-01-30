import { validateHorizontalPosition, validateVerticalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Technic } from '../models/technic';

@Injectable({
  providedIn: 'root'
})
export class TechnicService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

  findAll():Observable<Technic[]>{
    const url = this.baseUrl + "/technics";
    return this.http.get<Technic[]>(url);
  }

  findById(id: any): Observable<Technic> {
    const url = `${this.baseUrl}/technics/${id}`;
    return this.http.get<Technic>(url);
  }

  create(technic : Technic):Observable<Technic> {
    const url = this.baseUrl + "/technics";
    return this.http.post<Technic>(url, technic);
  }

  update(technic : Technic):Observable<Technic> {
    const url = `${this.baseUrl}/technics/${technic.id}`;
    return this.http.put<Technic>(url, technic);

  }

  delete(id: any):Observable<void>{
    const url = `${this.baseUrl}/technics/${id}`;
    return this.http.delete<void>(url);
  }

  message(msg : String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }

}
