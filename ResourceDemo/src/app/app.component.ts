import { Component } from '@angular/core';
import { SignalResourceComponent } from './signal-resource/signal-resource.component';
import { ObserveableResourceComponent } from './observeable-resource/observeable-resource.component';

@Component({
  selector: 'app-root',
  imports: [SignalResourceComponent,ObserveableResourceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ResourceDemo';
}
