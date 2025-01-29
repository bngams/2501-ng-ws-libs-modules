import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@project/core';

@Component({
  selector: 'fo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: false
})
export class ProductCardComponent implements OnInit {
  // property binding [product]
  @Input()
  product!: Product;

  constructor() {
    console.log('ProductCardComponent created');
  }

  ngOnInit(): void {
    console.log('ProductCardComponent ngOnInit with @Inputs ', this.product);
  }
}
