import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { routes } from './app.routes';

export const productroutes:Routes=[
{path:'',component:StoreComponent, children:[
{path:'overview',component:OverviewComponent},
{path:'products',component:ProductDetailsComponent}
]
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]

})
export class ProductsModule {
  constructor(){
    console.log('Product Module Loaded Lazily..')
  }
 }
