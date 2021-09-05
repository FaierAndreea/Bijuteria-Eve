import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderExtended } from '../Models/IOrderModel';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  url = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<IOrderExtended[]>(this.url + 'order');
  }

  getOrderDetails(id: number) {
    return this.http.get(this.url + 'order/' + id);
  }
}
