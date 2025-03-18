import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-child-b',
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildBComponent implements DoCheck {

  @Input() counterB={count:0}
  constructor(private cdr:ChangeDetectorRef){
    
  }
  ngDoCheck(): void {
    console.log("ChildBComponent")
}

count=0;

increment(){
  this.count=this.count+1;
}
}
