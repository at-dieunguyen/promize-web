import { BlogTwocolumnRoutingModule } from './blog-twocolumn-routing.module';
import { BlogTwocolumnComponent } from './blog-twocolumn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BlogTwocolumnComponent
  ],
  imports: [
    CommonModule,
    BlogTwocolumnRoutingModule
  ]
})
export class BlogTwocolumnModule { }
