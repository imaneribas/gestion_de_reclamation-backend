import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/model/reservation';
import { Location, DatePipe } from '@angular/common';
import { DisponibilitiesService } from 'src/app/services/disponibilities.service';
import { Disponibilite } from 'src/app/model/disponibilite';
import { MatDatepickerInputEvent } from '@angular/material';
@Component({
  selector: 'app-reservationdetail',
  templateUrl: './reservationdetail.component.html',
  styleUrls: ['./reservationdetail.component.css']
})
export class ReservationdetailComponent implements OnInit {
reservation:any={date: "",
      creneau: {
        horaire: "",
      },

      disponiblite: {
        typedispo: "",
        //id_disponibilite: number
    },
      client: {
      role: {
          typerole: "",
        // id_tablerole: number
      },
      // id_User: number,
      nom: "",
      prenom: "",
      email: "",
      // phone: number
      },
      };
classeValue : any;
reservations: any[];
disponibilities: any[];
dispo:Disponibilite;
selectedOption: any;
  selectdate: string;
  constructor(private datePipe: DatePipe,private route: ActivatedRoute, private reservationService: ReservationService, private disponibilitiesService: DisponibilitiesService,private location : Location) { }

  ngOnInit() {
    this.getReservation();
    this.reservationService.findAll()
    .subscribe(
      (data : any) => 
       { this.reservations = data;
        console.log("here the fetched classes: "+data);
      },
        (error : any) => {
          console.log("error on getting data from classes")
        }
    );
  
    this.disponibilitiesService.findAlldispo()
    .subscribe(
      (data : any) => 
       { this.disponibilities = data;
        console.log("here the fetched classes: "+data);
      },
        (error : any) => {
          console.log("error on getting data from classes")
        }
    );
  }
  
  getReservation(): void {
    const id = +this.route.snapshot.paramMap.get('id_reservation');
    this.reservationService.getReservationbyid(id)
      .subscribe(data => {
        this.reservation = data;  
        if(this.reservation.client==null){
          this.reservation.client={
            role: {
                typerole: "",
            },
            nom: "",
            prenom: "",
            email: "",
            };
        }
        console.log('data', data);
     })
  }
  

  goBack(): void {
    this.location.back();
  } 
  selectOption() {
    console.log(this.selectedOption);
    
}

addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  this.selectdate = this.datePipe.transform(event.value,"yyyy-MM-dd");
  console.log(this.selectdate);
}

  save(): void {
    this.reservation.disponiblite=this.selectedOption;
    this.reservation.date=this.selectdate;
    this.reservationService.updateReservation(this.reservation)
    .subscribe(() => this.goBack());
    console.log("done");
  }
 

}
