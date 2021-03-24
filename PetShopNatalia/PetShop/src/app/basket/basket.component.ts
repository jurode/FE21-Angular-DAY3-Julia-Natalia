import { Component, OnInit, DoCheck } from '@angular/core';
import { productsAll } from '../products';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, DoCheck {

  productsInCart;
  basketLength;

  constructor(private shoppingCartService: ShoppingCartService) { }

  sumPrice = function(products) {
    var total = 0;
    this.productsInCart.forEach(products,function(value,index){
      total += parseFloat(value.price);
    }); 
    return total.toFixed(2);
  };

  ngOnInit(): void {
    this.productsInCart = this.shoppingCartService.getProducts();
  }

  ngDoCheck() {
    this.basketLength = this.shoppingCartService.productsInCartLength();
  }

}
