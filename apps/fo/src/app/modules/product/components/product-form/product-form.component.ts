import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@project/core';

@Component({
  selector: 'fo-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  @Output()
  productSubmitted = new EventEmitter<Product>();

  // we can type FormGroup
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.min(1)] ),
  });

  onSubmit(): void {
    console.log('Form submitted');
    // 1) complex transformation, checks.... (if needed)
    const p: Product = this.productForm.value as Product;
    // 2) pass object to emitter or HTTP post (this.httpService.createProduct(p))
    this.productSubmitted.emit(p);
  }
}
