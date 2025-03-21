import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponent } from "./simple/simple.component";

@Component({
  selector: 'app-root',
  imports: [SimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-drag-drop';
}
