import { Component, DoCheck } from '@angular/core';
import { ChildAComponent } from './child-a/child-a.component';

@Component({
  selector: 'app-root',
  imports: [ChildAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck{
  title = 'change-detection-a';

  ngDoCheck(): void {
    console.log("Parent Component")
}

 counter={
  count:0
}

increment(){
  this.counter.count=this.counter.count+1;
}
}
