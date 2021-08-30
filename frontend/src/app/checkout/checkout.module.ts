import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { CheckoutDeliveryComponent } from './checkout-delivery/checkout-delivery.component';
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    StepperComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutAddressComponent,
    CheckoutSuccessComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CdkStepperModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CheckoutModule { }
