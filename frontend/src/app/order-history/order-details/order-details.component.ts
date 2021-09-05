import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrderExtended } from 'src/app/Models/IOrderModel';
import { OrderHistoryService } from '../order-history.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrderExtended;

  constructor(private orderService: OrderHistoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderService.getOrderDetails(+this.route.snapshot.paramMap.get('id')).subscribe(
      (order: IOrderExtended) => {
        this.order = order;
      }, error => console.log(error)
    )
  }

}
