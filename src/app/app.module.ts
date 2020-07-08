import { CarouselModule } from './shared/carousel/carousel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
// import { CarouselComponent } from './shared/carousel/carousel.component';
// import { MainComponent } from './shared/main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { BlogSinggerComponent } from './shared/blog-singger/blog-singger.component';
import { Blog2columnComponent } from './shared/blog2column/blog2column.component';
// import { FooterTopComponent } from './shared/footer-top/footer-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // CarouselComponent,
    // MainComponent,
    FooterComponent,
    // BlogSinggerComponent,
    Blog2columnComponent,
    // FooterTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SlickCarouselModule,
    // CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
