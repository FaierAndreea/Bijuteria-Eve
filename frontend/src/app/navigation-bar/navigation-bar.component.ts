import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { ICartModel } from '../Models/cartModel';
import { IUserModel } from '../Models/userModel';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  cart$: Observable<ICartModel>;
  user$: Observable<IUserModel>;

  constructor(private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.cart$ = this.cartService.cart$;
    this.user$ = this.userService.currentUser$;
  }

  logout() {
    this.userService.logout();
  }

}
