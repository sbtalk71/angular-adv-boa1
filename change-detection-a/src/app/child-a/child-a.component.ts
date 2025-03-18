import { ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-child-a',
  imports: [ChildBComponent],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent implements DoCheck{
 
  @Input() counterA={count:0};

  counterForB={count:0};

ngDoCheck(): void {
    console.log("ChildAComponent")
}

update(){
  this.counterForB={...this.counterA};
}
}
