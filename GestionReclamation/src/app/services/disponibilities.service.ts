import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disponibilite } from '../model/disponibilite';
@Injectable({
  providedIn: 'root'
})
export class DisponibilitiesService {

  private reservationUrl= 'http://localhost:8080/reservation';
  
  
  constructor(private http: HttpClient) { }

  findAlldispo(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.reservationUrl+ '/getalldisponibilities');

  }

 /* updateDisponibilite (c: Disponibilite) {
    const url = `${this.reservationUrl+'/modifydisponibilite'}`;
    return this.http.put(url, c);
  }
  getdisponibilitebyid(id: number): Observable<Disponibilite>{
    const url = `${this.reservationUrl+'/getdisponibilitebyid'}/${id}`;
    return this.http.get<Disponibilite>(url);
  }*/
 
}
