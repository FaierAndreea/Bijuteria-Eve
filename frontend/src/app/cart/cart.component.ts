import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartItem, ICartModel, ICartTotal } from '../Models/cartModel';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<ICartModel>
  total$: Observable<ICartTotal>

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.total$ = this.cartService.total$;
  }

  removeItem(item: ICartItem) {
    this.cartService.removeItem(item);
  }

  incrementQuantity(item: ICartItem) {
    this.cartService.incrementQuantity(item);
  }

  decrementQuantity(item: ICartItem) {
    this.cartService.decrementQuantity(item);
  }

}
