import { Component, Input } from '@angular/core';
import { Product } from '@project/core';

@Component({
  selector: 'fo-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: false
})
export class ProductCardComponent {
  // property binding [product]
  @Input()
  product!: Product;
}
