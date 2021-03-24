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
  cartTotal: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsInCart = this.shoppingCartService.getProducts();
    this.cartTotal = this.shoppingCartService.getTotal();
  }

  ngDoCheck() {
    this.basketLength = this.shoppingCartService.productsInCartLength();
  }

}
