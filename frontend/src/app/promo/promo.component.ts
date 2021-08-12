import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToShop() {
    this.router.navigateByUrl('/shop');
  }

}
