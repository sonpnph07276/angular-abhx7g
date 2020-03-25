import { Injectable } from "@angular/core";
import { data } from "../MockData";
import { Product } from "../Product";

@Injectable()
export class ProductService {
  products = data;
  constructor() {}

  getProducts() { //lay danh sach san pham
    return this.products;
  }
  getProduct(id){// chi tiet san pham

  }
  addProduct(product) {
    let newObj = { id: 6, ...product };
    this.products.push(newObj);
  }
  removeProduct(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }

  editProduct() {}
  addCartProduct() {}
}
