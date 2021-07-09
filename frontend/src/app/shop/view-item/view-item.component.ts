import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGemModel } from 'src/app/Models/GemModel';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  gem: IGemModel;

  constructor(private shopService: ShopService, private activeRoute: ActivatedRoute) { }

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

}
