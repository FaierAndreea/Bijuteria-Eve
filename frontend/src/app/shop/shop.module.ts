import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ViewItemComponent } from './view-item/view-item.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ShopComponent,
    ShopItemComponent,
    ViewItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports : [
    ShopComponent
  ]
})
export class ShopModule { }
