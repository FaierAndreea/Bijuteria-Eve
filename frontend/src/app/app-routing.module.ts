import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShopComponent } from './shop/shop.component';
import { ViewItemComponent } from './shop/view-item/view-item.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ViewItemComponent},
  {path: '', redirectTo:'shop', pathMatch: 'full'},
  {path: 'cart', loadChildren: ()=>import('./cart/cart.module').then(mod => mod.CartModule), data: {breadcrumb: 'Cart'}},
  {path: 'user', loadChildren: ()=>import('./user/user.module').then(mod => mod.UserModule), data: {breadcrumb: {skip: true}}},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
