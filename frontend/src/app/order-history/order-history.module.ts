import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderHistoryComponent } from './order-history.component';
import { OrderHistoryRoutingModule } from './order-history-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    OrderHistoryComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderHistoryRoutingModule
  ]
})
export class OrderHistoryModule { }
