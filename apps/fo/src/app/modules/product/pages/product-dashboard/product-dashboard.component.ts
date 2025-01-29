import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Product } from '@project/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'fo-product-dashboard',
  standalone: false,

  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss'
})
export class ProductDashboardComponent implements AfterViewInit {
  @ViewChild(ProductListComponent)
  private productListComponent!: ProductListComponent;

  constructor() {
    console.log('ProductDashboardComponent created');
    console.log('productListComponent', this.productListComponent);
  }

  ngAfterViewInit(): void {
    console.log('ProductDashboardComponent ngAfterViewInit');
    console.log('productListComponent ngAfterViewInit', this.productListComponent);
  }

  addProduct(product: Product) {
    this.productListComponent.appendProduct(product);
  }
}
