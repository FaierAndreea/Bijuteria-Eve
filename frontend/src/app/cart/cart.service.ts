import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, ICartItem, ICartModel, ICartTotal } from '../Models/cartModel';
import { IDeliveryModel } from '../Models/DeliveryModel';
import { IGemModel } from '../Models/GemModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'https://localhost:5001/api/'
  private cartBS = new BehaviorSubject<ICartModel>(null);
  private totalBS = new BehaviorSubject<ICartTotal>(null);
  cart$ = this.cartBS.asObservable();
  total$ = this.totalBS.asObservable();
  shippingPrice = 0;

  constructor(private http: HttpClient) { }

  getCart(id: string) {
    return this.http.get(this.url + 'cart?cartId=' + id).pipe(
      map((cart: ICartModel)=> {
        this.cartBS.next(cart);
        this.calculateTotal();
      })
    );
  }

  updateCart(cart: ICartModel) {
    return this.http.post(this.url + 'cart', cart).subscribe(
      (response: ICartModel)=>{
         this.cartBS.next(response);
         this.calculateTotal();
        }, error => console.log(error)
      );
  }
  deleteCart(cart: ICartModel) {
    return this.http.delete(this.url + 'cart?cartId=' + cart.id).subscribe(() => {
      this.cartBS.next(null);
      this.totalBS.next(null);
      localStorage.removeItem('cart_id'); },
      error => console.log(error) );
  }

  cleanUpCart(id: string) {
    this.cartBS.next(null);
    this.totalBS.next(null);
    localStorage.removeItem('cart_id');
  }

  incrementQuantity(item: ICartItem) {
    const cart = this.cartBS.value;
    const itemIndex = cart.items.findIndex(x => x.id === item.id);
    cart.items[itemIndex].quantity++;
    this.updateCart(cart);
  }

  decrementQuantity(item: ICartItem) {
    const cart = this.cartBS.value;
    const itemIndex = cart.items.findIndex(x => x.id === item.id);
    if(cart.items[itemIndex].quantity > 1) {
      cart.items[itemIndex].quantity--;
      this.updateCart(cart);
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: ICartItem) {
    const cart = this.cartBS.value;
    if ( cart.items.some(x => x.id === item.id ) ) {
      cart.items = cart.items.filter(i => i.id !== item.id);
      if ( cart.items.length > 0) {
        this.updateCart(cart);
      } else {
        this.deleteCart(cart);
      }
    }
  }

  addToCart(item: IGemModel, quantity = 1) {
    const itemAdded: ICartItem = this.mapGemToCartItem(item, quantity);
    const cart = this.cartBS.value ?? this.createCart();
    const itemIndex = cart.items.findIndex(i=> i.id === itemAdded.id);
    if(itemIndex === -1 ){
      cart.items.push(itemAdded);
    }     
    else {
      cart.items[itemIndex].quantity += quantity;
    }
    this.updateCart(cart);
  }

  mapGemToCartItem(item: IGemModel, quantity: number): ICartItem {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
      picture: item.picture
    };
  }

  private createCart(){
    const cart = new Cart();
    localStorage.setItem('cart_id', cart.id);
    return cart;
  }

  private calculateTotal() {
    const cart = this.cartBS.value;
    const shipping = this.shippingPrice;
    const subtotal = cart.items.reduce((a,b)=> (b.price * b.quantity) + a, 0);
    const total = subtotal + shipping;
    this.totalBS.next({shipping, subtotal, total});
  }

  addShippingPrice(delivery: IDeliveryModel) {
    this.shippingPrice = delivery.price;
    this.calculateTotal();
  }

  getCartBSValue() {
    return this.cartBS.value;
  }
}
