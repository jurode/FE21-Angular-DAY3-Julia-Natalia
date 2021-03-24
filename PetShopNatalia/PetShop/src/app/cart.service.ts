import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsInCart = []; // here the current products in the cart will be stored

  constructor() { }

  // create a function to add products to cart
  addProductToCart(product) {
    this.productsInCart.push(product);
  }

  // create a function to collect the products which user adds to the cart; this function also returns each product with its quantity
  getEachProduct() {
    return this.productsInCart;
  }

  // create a function that clears the cart and returns an empty cart
  clearShoppingCart() {
    this.productsInCart = [];
    return this.productsInCart;
  }
}
