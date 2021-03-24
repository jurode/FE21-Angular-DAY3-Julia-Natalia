import { Component, OnInit } from '@angular/core';
import { products } from '../products'; // to show them in this component

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}
