import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
// @Input('data') product : Product;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProduct();
  }

}