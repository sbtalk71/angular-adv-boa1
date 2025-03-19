import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {

  isSaved:boolean=false;

  canExit(){
    if(window.confirm("Please save before navigation")){
     return true;
    }else{
      return false;
    }
  }
  save(){
    this.isSaved=true;
  }
}
