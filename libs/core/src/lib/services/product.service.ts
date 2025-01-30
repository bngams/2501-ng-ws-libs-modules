import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@project/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  // STORE ORIENTED
  loadProducts(): void {
    this.httpClient
      .get<any>('https://dummyjson.com/products?limit=10')
      .subscribe((data) => {
        this.products = data.products;
      });
  }

  // DIRECT CALL 
  fetchProducts(): Observable<any> {
    return this.httpClient
      .get<any>('https://dummyjson.com/products?limit=10');
      // .pipe();
  }
}
