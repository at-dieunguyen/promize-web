import { FooterTopModule } from './../footer-top/footer-top.module';
import { CarouselModule } from './../carousel/carousel.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    FooterTopModule,
    HttpClientModule
  ]
})
export class MainModule { }
