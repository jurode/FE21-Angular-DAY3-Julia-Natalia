import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  productsInCart = []; // create a empty array where each product will be temporarily saved -- until checkout or cleared

  constructor() { }

  // add functions

  // create function to add items to cart
  addProductsToCart(product) {
    this.productsInCart.push(product);
    console.log(this.productsInCart)
  }

  // create function to add products to the cart and to return each product with its quantity
  getProducts() {
    return this.productsInCart;
  }

  // create function to remove the items from the cart and return an empty cart
  clearCart() {
    this.productsInCart = [];
    return this.productsInCart;
  }

}
