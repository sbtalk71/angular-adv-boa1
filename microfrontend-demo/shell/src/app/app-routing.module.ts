import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'orders',loadChildren:()=>import('orders/OrdersModule').then(m=>m.AppRoutingModule)},
  {path:'products',loadChildren:()=>import('products/ProductsModule').then(m=>m.AppRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
