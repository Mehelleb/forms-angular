import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product!: Product;
  list!:Product[]
  ngOnInit(): void {
    this.product=new Product();
    this.list=[];
    
  }
  addroduct(){
    this.product.like=0;
    this.list.push(this.product);
    console.log(this.list);
  }
  }


