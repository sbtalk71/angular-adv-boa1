import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-directives',
  imports: [CommonModule],
  templateUrl: './new-directives.component.html',
  styleUrl: './new-directives.component.css'
})
export class NewDirectivesComponent {

  price=100;
  discount=0.2;

  users=[
    {id:1,name:'Amit'},
    {id:2,name:'Rupa'},
    {id:3,name:'Jyothi'},
    {id:4,name:'Parmeet'},
    {id:5,name:'Srnivas'},
  ]

  isAdmin=false;
  user={name:"Dharam"}

  status='error';
}
