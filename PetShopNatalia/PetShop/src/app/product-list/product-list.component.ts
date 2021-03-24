import { Component, OnInit } from '@angular/core';
import { productsAll } from '../products';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = productsAll; // 'products' is a name of my parameter ; 'productsAll' is the name of my imported array from the file products.ts

  constructor() {
    console.log(this.products); // check if works
  }

  ngOnInit(): void {
  }

}
