import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CartService } from 'src/app/cart/cart.service';
import { ICartModel } from 'src/app/Models/cartModel';
import { IOrderExtended } from 'src/app/Models/IOrderModel';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  cart$: Observable<ICartModel>;

  constructor(private cartService: CartService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$.pipe(filter(c => !!c));
  }

  submitOrder() {
    const cart = this.cartService.getCartBSValue();
    const createOrder = this.createOrder(cart);
    this.checkoutService.createOrder(createOrder).subscribe((order: IOrderExtended) => {
      this.cartService.cleanUpCart(cart.id);
      console.log(order);
      this.router.navigateByUrl('checkout/success');
    }, error => console.log(error));
  }

  private createOrder(cart: ICartModel) {
    return {
      cartId: cart.id,
      deliveryMethodId: this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    }
  }
}
