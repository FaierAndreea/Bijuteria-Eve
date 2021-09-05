import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './order-history.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes =  [
  {path: '', component: OrderHistoryComponent},
  {path: ':id', component: OrderDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderHistoryRoutingModule { }
