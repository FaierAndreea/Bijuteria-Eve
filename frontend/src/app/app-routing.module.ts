import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { OrderDetailsComponent } from './order-history/order-details/order-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromoComponent } from './promo/promo.component';
import { ShopComponent } from './shop/shop.component';
import { ViewItemComponent } from './shop/view-item/view-item.component';

const routes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'shop/:id', component: ViewItemComponent},
  {path: 'description', component: DescriptionComponent },
  {path: 'promo', component: PromoComponent},
  {path: 'order-history', component: OrderHistoryComponent},
  {path: 'order-history/:id', component: OrderDetailsComponent},
  {path: '', redirectTo:'shop', pathMatch: 'full'},
  {path: 'cart', loadChildren: ()=>import('./cart/cart.module').then(mod => mod.CartModule), data: {breadcrumb: 'Cart'}},
  {path: 'checkout', canActivate: [CheckoutGuard], loadChildren: ()=>import('./checkout/checkout.module').then(mod => mod.CheckoutModule), data: {breadcrumb: 'Checkout'}},
  {path: 'user', loadChildren: ()=>import('./user/user.module').then(mod => mod.UserModule), data: {breadcrumb: {skip: true}}},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
