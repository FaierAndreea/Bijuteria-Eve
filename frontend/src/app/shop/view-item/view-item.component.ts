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

  popup() {
    // var current = this.gem.picture;
    // var url = prompt("change address to:", current);
    // this.gem.picture = url;

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    (<HTMLImageElement>modalImg).src = this.gem.picture;
  }

  closePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

}
