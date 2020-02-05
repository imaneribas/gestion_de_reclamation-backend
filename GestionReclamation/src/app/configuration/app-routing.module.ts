import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationComponent } from '../component/reservation/reservation.component';

import { ReservationdetailComponent } from '../component/reservationdetail/reservationdetail.component';
import { AddreservationComponent } from '../component/addreservation/addreservation.component';
import { HomeAdminComponent } from '../component/home-admin/home-admin.component';
import { ContactComponent } from '../component/contact/contact.component';



const routes: Routes = [
  {path:"reservation/detail/:id_reservation", component: ReservationdetailComponent },
  {path:"reservation/add", component: AddreservationComponent },
  {path:"home", component: HomeAdminComponent  },
  {path:"list", component: ReservationComponent  },
  {path:"contactus", component: ContactComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[ReservationComponent,ReservationdetailComponent,AddreservationComponent]