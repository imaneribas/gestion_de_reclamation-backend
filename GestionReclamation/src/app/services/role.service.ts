import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private usersUrl= 'http://localhost:8080/reservation';
  
  constructor(private http: HttpClient) { 
  }
  findAll(){
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.get(this.usersUrl+ '/getroles');

}}
