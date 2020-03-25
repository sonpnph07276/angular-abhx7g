import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  selected: Product;
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProduct();
  }
  showDetail(product) {
    this.selected = product;
  }
  getProduct() {
    this.products = this.productService.getProduct();
  }
}
