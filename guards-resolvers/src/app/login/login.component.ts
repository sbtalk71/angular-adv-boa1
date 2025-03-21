import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginModel:User={username:"",password:""};

  constructor(private auth:AuthService,private router:Router){

  }
  onLogin(){
    this.auth.login(this.loginModel).subscribe({
      next: jwt=>{localStorage.setItem("token",jwt.token);this.router.navigate['resource']},
      error:err=>console.log(err)
    });
  }


}
