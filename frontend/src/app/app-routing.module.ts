import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { ViewItemComponent } from './shop/view-item/view-item.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ViewItemComponent},
  {path: '', redirectTo:'shop', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
