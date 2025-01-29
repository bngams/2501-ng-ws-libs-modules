import { Component } from '@angular/core';
import { Product } from '@project/core';

@Component({
  selector: 'fo-product-dashboard',
  standalone: false,

  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent {
  products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }
}
