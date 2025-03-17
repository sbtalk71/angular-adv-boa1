import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../store/counter.actions'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Counter } from '../store/counter.reducers';
import { countSelector } from '../store/counter.selectors';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counterValue$!: Observable<number>;

  constructor(private store: Store<{ counter: Counter}>) {
    this.counterValue$ = this.store.select(countSelector);
  }

  doincrement() {
    this.store.dispatch(increment());
  }

  dodecrement() {
    this.store.dispatch(decrement());
  }

  doreset(){
    
      this.store.dispatch(reset());
   
  }
}
