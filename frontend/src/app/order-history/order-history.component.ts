import { Component, OnInit } from '@angular/core';
import { IOrderExtended } from '../Models/IOrderModel';
import { OrderHistoryService } from './order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  orders: IOrderExtended[] = [];

  constructor(private orderService: OrderHistoryService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(response => {
      this.orders = response;
    }, error => console.log(error));
  }
}
