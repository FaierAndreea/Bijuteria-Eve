import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { ICartTotal } from '../Models/cartModel';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartTotal$: Observable<ICartTotal>;
  checkoutForm: FormGroup;

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.cartTotal$ = this.cartService.total$;
    this.createCheckoutForm();
    this.getAddressFormValues();
  }

  createCheckoutForm() {
    this.checkoutForm = this.formBuilder.group({
      addressForm: this.formBuilder.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        streetNumber: new FormControl('', Validators.required),
        details: new FormControl('', Validators.required),
        zipCode: new FormControl('', Validators.required)
      }),
      deliveryForm: this.formBuilder.group({
        deliveryMethod: new FormControl('', Validators.required)
      })
    })
  }

  getAddressFormValues() {
    this.userService.getAddress().subscribe(address => {
      if (address) {
        this.checkoutForm.get('addressForm').patchValue(address);
      }
    }, error => {
      console.log(error);
    })
  }
}
