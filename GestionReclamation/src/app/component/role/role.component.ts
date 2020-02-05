import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: any[];
  constructor(private role:RoleService) { }
  
  ngOnInit() {
    this.role.findAll()
    .subscribe(
      (data : any) => 
       {  
         this.roles = data;
        console.log("here the fetched role: "+data);
      },
        (error : any) => {
          console.log("error ");
        }
    );

}}
