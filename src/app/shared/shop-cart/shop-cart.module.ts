import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShopCartComponent } from './shop-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@NgModule({
  declarations: [
    ShopCartComponent
  ],
  imports: [
    CommonModule,
    ShopCartRoutingModule,
    SlickCarouselModule
  ],
  exports: [ShopCartComponent]
})
export class ShopCartModule { }
