import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/model/reservation';
import {MatDialog} from '@angular/material';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ReservationdetailComponent } from '../reservationdetail/reservationdetail.component';
import { PopupComponent, ConfirmDialogModel } from '../popup/popup.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OrderPipe } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: any[];
  result: string = '';
  //reservs: any[];
  order: string = 'date';
  reverse: boolean = false;
  sortedCollection: any[];
  collection = [];
  p: number=1;
  constructor(private orderPipe: OrderPipe,private rese:ReservationService,public matdialog:MatDialog,private location : Location) { 
    this.sortedCollection = orderPipe.transform(this.reservations, 'date');
    console.log(this.sortedCollection);

 
  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
    this.refresh();
}
confirmDialog(): void {
  
}
refresh(){
  this.rese.findAll()
  .subscribe(
    (data : any) => 
     {  
       this.reservations = data;
      console.log("here the fetched reservations: "+data);
    },
      (error : any) => {
        console.log("error ");
      }
  );

}
delete(id_reservation): void {
  const message = `Are you sure you want to delete ?`;

  const dialogData = new ConfirmDialogModel("Confirm Action", message);

  const dialogRef = this.matdialog.open(PopupComponent, {
    maxWidth: "400px",
    data: dialogData
  });
 
  dialogRef.afterClosed().subscribe(dialogResult => {
    this.result = dialogResult;
    if(this.result){
      //alert("delete");
    this.reservations = this.reservations.filter(h => h !== id_reservation);
    this.rese.deleteReservation(id_reservation).subscribe(()=>{
      this.refresh();
    });
    

  }
   


  });
  
  //this.ngxSmartModalService.getModal('myModal').close();
}
goBack(): void {
  this.location.back();
} 


}
