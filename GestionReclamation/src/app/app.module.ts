 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule ,routingcomponents} from './configuration/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { HomeAdminComponent } from './component/home-admin/home-admin.component';
import { ReservationService } from './services/reservation.service';
import { RoleComponent } from './component/role/role.component';
import { ReservationComponent } from './component/reservation/reservation.component';

import { ReservationdetailComponent } from './component/reservationdetail/reservationdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddreservationComponent } from './component/addreservation/addreservation.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './component/popup/popup.component';
import{ MAT_DATE_FORMATS, NativeDateAdapter, DateAdapter} from '@angular/material';
import { DatePipe } from '@angular/common';
import { ContactComponent } from './component/contact/contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';

const MY_DATE_FORMATS = {
  parse: {
      dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
  },
  display: {
      dateInput: 'input',
      monthYearLabel: { year: 'numeric', month: 'short' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
      } else {
          return date.toDateString();
      }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    HomeAdminComponent,
    RoleComponent,
    ReservationComponent,
    ReservationdetailComponent,
    AddreservationComponent,
    PopupComponent,
    ContactComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDialogModule ,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule,
    NgxPaginationModule
    
    
  ],
  exports: [

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    DatePipe
  ],
  providers: [ReservationService,{provide: DateAdapter, useClass: AppDateAdapter},  
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
