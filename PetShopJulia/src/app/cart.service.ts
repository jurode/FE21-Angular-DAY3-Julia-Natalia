import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    console.log(product.name);
    console.log(this.items.length);
    
    if (this.items.length == 0){
      console.log("not existing")
      
    } else {
      for(let i = 0; i < this.items.length; i++){
        if (product.name == this.items[i].name){
          console.log("same");
        }
      }
      
    }
    this.items.push(product);
    
  }
  
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}