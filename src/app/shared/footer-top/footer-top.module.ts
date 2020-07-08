import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterTopComponent } from './footer-top.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FooterTopComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports:[
    FooterTopComponent
  ]
})
export class FooterTopModule { }
