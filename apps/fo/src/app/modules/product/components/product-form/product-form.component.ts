import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '@project/core';
import { ProductService } from '../../../../../../../../libs/core/src/lib/services/product.service';

@Component({
  selector: 'fo-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  @Output()
  productSubmitted = new EventEmitter<Product>();

  isLoading = false;

  constructor(private productService: ProductService) {
    // or custom injector code
    // const injector = this.injector.get(Injector);
    // injector.get('ProductService');
  }

  // we can type FormGroup
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.min(1)] ),
  });

  onSubmit(): void {
    if(this.productForm.invalid) {
      // console.error
      alert('Form is invalid');
      return;
    }
    this.isLoading = true;
    console.log('Form submitted');
    // 1) complex transformation, checks.... (if needed)
    const p: Product = this.productForm.value as Product;
    // 2) pass object to emitter or HTTP post (this.httpService.createProduct(p))
    // this.productSubmitted.emit(p);
    // 2) other way to pass object to service
    this.productService.addProduct(p);
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
