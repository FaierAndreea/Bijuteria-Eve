import { Component, Input, OnInit } from '@angular/core';
import { IGemModel } from 'src/app/Models/GemModel';


@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() gem!: IGemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
