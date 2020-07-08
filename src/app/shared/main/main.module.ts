import { FooterTopModule } from './../footer-top/footer-top.module';
import { CarouselModule } from './../carousel/carousel.module';
import { CarouselComponent } from './../carousel/carousel.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    FooterTopModule
  ]
})
export class MainModule { }
