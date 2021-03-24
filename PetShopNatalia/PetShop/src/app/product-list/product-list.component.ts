import { Component, OnInit } from '@angular/core';
import { productsAll } from '../products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = productsAll; // 'products' is a name of my parameter ; 'productsAll' is the name of my imported array from the file products.ts

  constructor( private shoppingCartService: ShoppingCartService) {
    console.log(this.products); // check if works
  }

  addProductsToCart(product) {
    window.alert(`You added a product to your cart`);
    this.shoppingCartService.addProductsToCart(product);
  }

  ngOnInit(): void {
  }

}
