import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ShopModule } from './shop/shop.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { PromoModule } from './promo/promo.module';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { OrderHistoryModule } from './order-history/order-history.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShopModule,
    HomeModule,
    PromoModule,
    PageNotFoundModule,
    OrderHistoryModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    BsDropdownModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
