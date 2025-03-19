import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../validaors';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.initForm();
  }

  /*
  initForm(){
    this.userForm=new FormGroup({
      userName:new FormControl(''),
      email:new FormControl(''),
      age:new FormControl('')
    });
  }
    */

  initForm(){
    this.userForm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/i)]],
      email:['',[Validators.required,Validators.email]],
      age:['',[Validators.required,Validators.pattern(/^(?:[1-9][0-9]?|100)$/)]]
    })
  }
get userName(){
  return this.userForm.get('userName');
}

get email(){
  return this.userForm.get('email');
}

get age(){
  return this.userForm.get('age');
}

}
