import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

export const productResolver: ResolveFn<Observable<string>> = (route, state) => {

 let products:string='';
  const service=inject(AuthService);

 return service.fetchProducts();
//  service.fetchProducts().subscribe(data=>products=data);
//  return products 
};
