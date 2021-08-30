import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IDeliveryModel } from '../Models/DeliveryModel';
import { IOrderModel } from '../Models/IOrderModel';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = 'https://localhost:5001/api/';

  constructor( private http : HttpClient) { }

  createOrder(order: IOrderModel) {
    return this.http.post(this.url + 'order', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.url + 'order/deliveryMethods').pipe(
      map((dm: IDeliveryModel[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    )
  }
}
