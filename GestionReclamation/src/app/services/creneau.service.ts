import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreneauService {
  private reservationUrl= 'http://localhost:8080/reservation';
  constructor(private http: HttpClient) { }
  findallcreneau(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.reservationUrl+ '/getallcreneau');

  }
}
