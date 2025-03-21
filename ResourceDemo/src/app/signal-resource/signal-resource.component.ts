import { CommonModule } from '@angular/common';
import { Component, resource, signal } from '@angular/core';

@Component({
  selector: 'app-signal-resource',
  imports: [CommonModule],
  templateUrl: './signal-resource.component.html',
  styleUrl: './signal-resource.component.css'
})
export class SignalResourceComponent {

  productId=signal(10);
  productResource=resource({
    request:this.productId,
    loader: async ({request,abortSignal})=>{
      const resp=await fetch(`https://fakestoreapi.com/products/${request}`,{signal:abortSignal});
      if(!resp.ok){
        throw new Error("failed to fetch remote data..");
      }
      console.log(resp)
      return resp.json();
    }
  });
}
