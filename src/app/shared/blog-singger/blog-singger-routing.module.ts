import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogSinggerComponent } from './blog-singger.component';


const routes: Routes = [
  {
    path: '',
    component: BlogSinggerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogSinggerRoutingModule { }
