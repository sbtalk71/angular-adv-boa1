import { Component, DoCheck } from '@angular/core';
import { ChildAComponent } from './child-a/child-a.component';
import { TrackbyComponent } from './trackby/trackby.component';

@Component({
  selector: 'app-root',
  imports: [TrackbyComponent],
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
