import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, PRODUCTS_MOCK } from '@project/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../../../../../../../libs/core/src/lib/services/product.service';

enum LOAD_MODE {
  MOCK,
  REQUEST,
  SERVICE_STORE,
  SERVICE_STORE_BEHAV,
  NGRX_STORE,
  REQUEST_OBSERVABLE
}

@Component({
  selector: 'fo-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: false
})
export class ProductListComponent implements OnInit {

  // ViewChildren example
  // @ViewChildren(ProductCardComponent)
  // productCards!: QueryList<ProductCardComponent>;

  products: Product[] = PRODUCTS_MOCK;


  loading = false;
  loadMode: LOAD_MODE = LOAD_MODE.MOCK;
  LOAD_MODE = LOAD_MODE; // Bind enum for use in the template

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadFromService();
  }

  appendProduct(product: Product) {
    this.products.push(product);
  }

  // TODO: can be a global method from a common parent class
  initData(): void {
    switch (this.loadMode) {
      case LOAD_MODE.MOCK:
        this.loadFromMocks();
        break;
      case LOAD_MODE.SERVICE_STORE:
        this.loadFromService(); // like a "SERVICE_STORE" service
        break;
      case LOAD_MODE.REQUEST_OBSERVABLE:
        this.loadProductsAsObservable();
        break;
      case LOAD_MODE.REQUEST:
      default:
        this.loadProductsWithHttp();
        break;
    }
  }

  loadFromMocks(): void {
    this.loading = true;
    this.products = PRODUCTS_MOCK;
    this.loading = false;
  }

  loadProductsWithHttp(): void {

  }

  loadProductsAsObservable(): void {

  }

  // products are loaded in service instance (like a SERVICE_STORE)
  loadFromService(): void {
    this.products = this.productService.products;
  }
}
