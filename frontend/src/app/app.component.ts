import { Component, OnInit } from '@angular/core';
import { CartService } from './cart/cart.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Eve';
  
constructor(private cartService: CartService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadCart();
    this.loadUser();
  }
  
  loadCart(){
    const cartId = localStorage.getItem('cart_id');
    if(cartId) {
      this.cartService.getCart(cartId).subscribe(()=> console.log('cart done'), error => console.log(error));
    }
  }

  loadUser(){
    const token = localStorage.getItem('token');
    if(token) {
      this.userService.loadCurrentUser(token).subscribe(()=> {
        console.log('user done'); },
        error => console.log(error)
      );
    }
  }
}
