import { Component, OnInit } from '@angular/core';
// import ActivatedRoute to grab a parameter with paramMap method
import { ActivatedRoute } from '@angular/router';

import { ShoppingCartService } from '../shopping-cart.service';
console.log(ShoppingCartService); // checking if the import worked

// import the productsAll from products.ts
import { productsAll } from '../products';


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute, private shoppingCartService: ShoppingCartService) { }

  addProductsToCart(product) {
    window.alert(`You added a product to your cart`);
    this.shoppingCartService.addProductsToCart(product);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => { // we take the parameters from the Map object; the subscribe() function defines how to obtain values to be published --> we grab the values from route.paramMap and put them to "parameters"
      this.product = productsAll[+parameters.get('productID')]; // [] -> inside of these we create a way to connect the item's index with the productId --> with the method .get('') we return a specified element --productId-- from a Map object
      console.log(productsAll[+parameters.get('productID')]) // returns object of productsAll[index]
    })
    console.log(this.product) // returns object of productsAll[index]
    console.log(productsAll) // returns an array with all objects 
  }
}
