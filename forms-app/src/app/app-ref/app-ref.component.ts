import { ApplicationRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-app-ref',
  standalone: true,
  templateUrl: './app-ref.component.html',
  styleUrl: './app-ref.component.css'

})
export class AppRefComponent {

  count=0;
  appRef=inject(ApplicationRef);

  increment(){
    this.count=this.count+1;
    this.appRef.tick();
  }
}
