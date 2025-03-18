import { Component, inject } from '@angular/core';
import { counter } from './store/counter.store';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  counterData=inject(counter);

  increment(){
  this.counterData.increment()
  }

  decrement(){
    this.counterData.decrement()
  }

  reset(){
    this.counterData.reset()
  }
  
}
