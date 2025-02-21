import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _httpClient=inject(HttpClient);


  getAllProducts():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products");
    
  }


  getProductById(id:string):Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products/"+id);
  }
}
