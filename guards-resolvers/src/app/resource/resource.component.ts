import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-resource',
  imports: [CommonModule],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.css'
})
export class ResourceComponent {

data:string='';

constructor( private http:HttpClient,private auth:AuthService){

}

// callApi(){
//   this.http.get<string>("https://jsonplaceholder.typicode.com/posts/23").subscribe(resp=>this.data=resp);
// }

callApi(){
this.auth.getSecuredResource().subscribe(bundle=>this.data=bundle);
}
}
