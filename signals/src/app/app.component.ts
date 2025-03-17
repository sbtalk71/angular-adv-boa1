import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';
import { CounterComponent } from "./counter/counter.component";
import { NewDirectivesComponent } from './new-directives/new-directives.component';

@Component({
  selector: 'app-root',
  imports: [SignalsComponent, CounterComponent,NewDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals';
}
