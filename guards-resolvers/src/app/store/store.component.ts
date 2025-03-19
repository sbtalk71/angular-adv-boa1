import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store',
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent{

  data$!:Observable<string>;

  constructor(private route:ActivatedRoute){
   this.data$= route.snapshot.data['productData'];
  }

// ngOnInit(): void {
//     this.data=this._service.fetchProducts()
//   }
}
