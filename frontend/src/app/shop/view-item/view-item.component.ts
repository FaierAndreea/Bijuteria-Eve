import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { IGemModel } from 'src/app/Models/GemModel';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {
  gem: IGemModel;
  quantity = 1;

  constructor(private shopService: ShopService, private cartService: CartService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.loadGem(+id);
  }

  loadGem(id: number) {
    this.shopService.getGem(id).subscribe(
      gem => { this.gem = gem; },
      error => { console.log(error); }
    );
  }

  addItemToCart() {
    this.cartService.addToCart(this.gem, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if(this.quantity>1) this.quantity--;
  }

}
