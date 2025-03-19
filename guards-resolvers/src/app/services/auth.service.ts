import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username='admin@admin.com';
  private password='welcome1';

  constructor() { }
    loggedIn(){
      return true;
    }

    fetchProducts():Observable<string>{
    
       return of('Mackbook Air M4');
    }
}
