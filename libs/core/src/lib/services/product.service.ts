import { Injectable } from '@angular/core';
import { Product } from '@project/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() { }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
