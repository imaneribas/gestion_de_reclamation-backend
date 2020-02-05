import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ReservationService } from 'src/app/services/reservation.service';
import { Reservation } from 'src/app/model/reservation';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }


  ngOnInit() {
    
  }
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }}
  
  export class ConfirmDialogModel {

    constructor(public title: string, public message: string) {
    }
}
  
  /*delete(id_reservation): void {
    this.reservations = this.reservations.filter(h => h !== id_reservation);
    this.rese.deleteReservation(id_reservation).subscribe();
    //this.ngxSmartModalService.getModal('myModal').close();
    console.log("succe ");
  }*/

