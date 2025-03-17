import { Component, signal,computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone:true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  constructor(){
    console.log("Component Created")
    effect(()=>{
      console.log("Updated value of x ",this.x())
    });
  }
  num1:number=10;
  num2:number=20;
  
  sum=this.num1+this.num2;

  changeNum1(){
    this.num1=this.num1+10;
    console.log("The new value of num1 is ",this.num1);
  }

  //signals
  x=signal(10);
  y=signal(20);

  sum2=computed(()=>this.x()+this.y());

  changeValueOfX(){
    this.x.update(value=>value+2);
  }
}
