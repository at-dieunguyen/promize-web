import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '',
      redirectTo: '/main',
      pathMatch: 'full'
    },
    {
      path: 'main',
      loadChildren: () => import('./shared/main/main.module').then(m => m.MainModule)
    },
    {
      path: 'blogsingger',
      loadChildren: () => import('./shared/blog-singger/blog-singger.module').then(m => m.BlogSinggerModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
