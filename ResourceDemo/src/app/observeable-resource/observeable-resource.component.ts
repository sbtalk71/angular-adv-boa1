import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-observeable-resource',
  imports: [],
  templateUrl: './observeable-resource.component.html',
  styleUrl: './observeable-resource.component.css'
})
export class ObserveableResourceComponent {

  constructor(private http:HttpClient){

  }
  
 
  productResource=rxResource({
      loader:()=>this.http.get<any>("https://fakestoreapi.com/products")
    }
  );
}
