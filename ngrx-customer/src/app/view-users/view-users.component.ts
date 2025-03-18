import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from '../store/users.reducers';
import { usersSelector } from '../store/users.selectors';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { addUser } from '../store/customers.actions';

@Component({
  selector: 'app-view-users',
  imports: [CommonModule],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
userData$:Observable<User[]>;
constructor(private store:Store<{userState:UserState}>){
  this.userData$=this.store.select(usersSelector)
}
addTheUser(uname:string){
 const u=new User();
 u.name=uname;
  this.store.dispatch(addUser({user:u}));
}
}
