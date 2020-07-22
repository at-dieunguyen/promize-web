import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingerProductRoutingModule } from './singer-product-routing.module';
import { SingerProductComponent } from './singer-product.component';


@NgModule({
  declarations: [SingerProductComponent],
  imports: [
    CommonModule,
    SingerProductRoutingModule,
    SlickCarouselModule
  ]
})
export class SingerProductModule { }
