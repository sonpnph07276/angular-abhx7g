import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
 products = data;
  api = 'https://5e7b5a0d0e046300163331a0.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }
  
    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.api);  
  }
  getProduct(id): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
    removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
  }
    updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}