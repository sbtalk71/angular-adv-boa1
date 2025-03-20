import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DoCheck, Signal, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../validaors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserFormComponent{
  
  userForm!: FormGroup;

  userNameSignal:Signal<any>|undefined;
  emailSignal:Signal<any>|undefined;
  ageSignal:Signal<any>|undefined;
  info:Signal<any>|undefined;
 
  constructor(private fb: FormBuilder) {
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

  initForm() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/admin/i)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern(/^(?:[1-9][0-9]?|100)$/)]]
    })
   
    this.userNameSignal=toSignal(this.userForm.get('userName')!.valueChanges,{initialValue:''});
    this.emailSignal=toSignal(this.userForm.get('email')!.valueChanges,{initialValue:''});
    this.ageSignal=toSignal(this.userForm.get('age')!.valueChanges,{initialValue:''});

    this.info=computed(()=>`${this.userNameSignal()} ${this.emailSignal()} ${this.ageSignal()}`);   


  }



  get userName() {
    return this.userForm.get('userName');

  }

  get email() {
    return this.userForm.get('email');
  }

  get age() {
    return this.userForm.get('age');
  }

}
