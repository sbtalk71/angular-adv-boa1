import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule
  ]
})
export class ProductsAppModule { 
  constructor(){
    console.log('Product Module Loaded Lazily..')
  }
}
