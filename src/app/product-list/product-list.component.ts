import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";

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
    console.log(this.products);
  }
  showDetail(product){
    this.selected= product;
  }
getProduct(){
 this.products= this.productService.getProduct();
 console.log(this.products);
}
}
