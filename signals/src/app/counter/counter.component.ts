import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count=signal({counter:0});

  constructor(){
    effect(()=>{console.log("Current value of counter is ",this.count())});
  }

  increment(){
    this.count.update(c=>{return {...c,counter:c.counter+1}});
  }

  double(){
    this.count.update(c=>({counter:c.counter*2})); //alternative to the above
  }

  reset(){
    this.count.set({counter:0});
  }
}
