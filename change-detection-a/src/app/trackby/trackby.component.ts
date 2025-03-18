import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  imports: [CommonModule],
  templateUrl: './trackby.component.html',
  styleUrl: './trackby.component.css'
})
export class TrackbyComponent {

  users=[
    {id:1,name:"sagar"},
    {id:2,name:"Jgar"},
    {id:3,name:"Raja"},
    {id:4,name:"Ranga"},
    {id:5,name:"Sharan"}
  ]

  updateData(){
    this.users=[
      {id:1,name:"sagar"},
      {id:2,name:"Jeegar"},
      {id:3,name:"Rajan"},
      {id:4,name:"Rangeela"},
      {id:5,name:"Sharan"},
      {id:6,name:"Kiran"}
    ]
  }

  trackById(id:number){
    return id;
  }
}
