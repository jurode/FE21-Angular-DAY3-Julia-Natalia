import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    alert('Your order has been submitted');
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
