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
    },
    {
      path: 'blogtwocolumn',
      loadChildren: () => import('./shared/blog-twocolumn/blog-twocolumn.module').then(m => m.BlogTwocolumnModule)
    },
    {
      path: 'shopcart',
      loadChildren: () => import('./shared/shop-cart/shop-cart.module').then(m => m.ShopCartModule)
    },
    {
      path: 'singerproduct',
      loadChildren: () => import('./shared/singer-product/singer-product.module').then(m => m.SingerProductModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
