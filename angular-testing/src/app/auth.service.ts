import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getData(){
    return 'this is the data';
  }

  callApi():Observable<User>{
    return of({name:'shantanu'})
  }
}
