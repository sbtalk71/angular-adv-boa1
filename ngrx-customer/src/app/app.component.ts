import { Component } from '@angular/core';
import { ViewUsersComponent } from './view-users/view-users.component';

@Component({
  selector: 'app-root',
  imports: [ViewUsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-customer';
}
