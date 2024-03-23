import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  product!:Product[]
ngOnInit(): void {
  this.product=[
    {id:1, title:"T-shirt-1", quantity:3, like:2},
    {id:2, title:"T-shirt-2", quantity:3, like:2},
    {id:3, title:"T-shirt-3", quantity:3, like:2}
  ];
}
}
