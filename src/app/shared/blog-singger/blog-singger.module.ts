import { BlogSinggerComponent } from './blog-singger.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSinggerRoutingModule } from './blog-singger-routing.module';



@NgModule({
  declarations: [BlogSinggerComponent],
  imports: [
    CommonModule,
    BlogSinggerRoutingModule
  ]
})
export class BlogSinggerModule { }
