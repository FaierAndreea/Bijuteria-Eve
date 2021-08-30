import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.scss']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveAddress() {
    this.userService.updateAddress(this.checkoutForm.get('addressForm').value).subscribe(error => {
      console.log(error);
    });
  }
}
