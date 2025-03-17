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
}
