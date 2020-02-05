import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/model/reservation';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DisponibilitiesService } from 'src/app/services/disponibilities.service';
import { CreneauService } from 'src/app/services/creneau.service';
import { MatDialogRef, MatDatepickerInputEvent } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {
  reservation:Reservation={
    
    date: "",
    creneau: {
      horaire: "",
  },
  /*client: {
    role: {
        typerole: "",
       
    },
    nom: "",
    prenom: "",
    email: "",
   // phone: number
},
disponiblite: {
  typedispo: "",
  
}*/
    };
  creneaux: any[];
  //events: string[] = [];
  selectdate : string;
  
  planModel: any = {start_time: new Date() };
  selectedOption: any;
 
  constructor( private datePipe: DatePipe,private reservationService: ReservationService,private location : Location,private route: ActivatedRoute,private disponibilitiesService: DisponibilitiesService,private creneauservice: CreneauService) { }
 
  ngOnInit() {

    this.creneauservice.findallcreneau()
    .subscribe(
      (data : any) => 
       { this.creneaux = data;
        console.log("here the fetched creneaux: "+data);
      },
        (error : any) => {
          console.log("error on getting data from classes")
        }
    );
  }
  goBack(): void {
    this.location.back();
  } 
 
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  
    this.selectdate = this.datePipe.transform(event.value,"yyyy-MM-dd");
  }

  selectOption() {
    console.log(this.selectedOption);
    //this.reservation.creneau=this.selectedOption;
    //console.log(this.reservation.creneau);
}

  save(){
    
  
    var t=this.selectdate;
    if(t){
    this.reservation.date=t;}
    else{
      this.reservation.date='';
    }
    this.reservation.creneau=this.selectedOption;
   
    this.reservationService.addreservation(this.reservation)
    
    .subscribe(() => this.goBack());
    console.log("done");
  }

 

}

