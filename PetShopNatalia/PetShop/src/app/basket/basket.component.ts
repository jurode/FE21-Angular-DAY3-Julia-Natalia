import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  productsInCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.productsInCart = this.shoppingCartService.getProducts();
  }
}
