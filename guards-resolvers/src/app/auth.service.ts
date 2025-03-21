import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL='http://localhost:3000/login';

 
  constructor(private http:HttpClient) { }

  login(user:User):Observable<any>{
    return this.http.post(this.LOGIN_URL,user)
  }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getSecuredResource():Observable<any>{
  return this.http.get<any>('http://localhost:3000/secured');//,{headers:{Authorization:"Bearer "+this.getToken()}});
  }
}
