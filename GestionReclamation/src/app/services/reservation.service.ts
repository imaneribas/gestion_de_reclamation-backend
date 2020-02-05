import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { Disponibilite } from '../model/disponibilite';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  private reservationUrl= 'http://localhost:8080/reservation';
  
  constructor(private http: HttpClient) { }

findAll(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.reservationUrl+ '/getall');
  }
  
deleteReservation (id_reservation): Observable<Reservation> {
  //const id = typeof id_reservation === 'string' ? id_reservation : id_reservation.id_reservation;
  const url = `${this.reservationUrl+'/deleteReservation'}/${id_reservation}`;
  return this.http.delete<Reservation>(url);
}
updateReservation (c: Reservation): Observable<any> {
  const url = `${this.reservationUrl+'/modifyReservation'}`;
  return this.http.put(url, c);
}

getReservationbyid(id: number): Observable<Reservation>{
  const url = `${this.reservationUrl+'/getreservationbyid'}/${id}`;
  return this.http.get<Reservation>(url);
}

addreservation(r: Reservation){
  const url = `${this.reservationUrl+'/load'} `;
  return this.http.post(url,r);
}
}

