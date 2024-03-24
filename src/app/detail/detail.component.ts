import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product!: Product[];
  id!:number;
  constructor(private route: ActivatedRoute){

  }
ngOnInit(): void {
  this.product=[
    {id:1, title:"T-shirt-1", quantity:3, like:2},
    {id:2, title:"T-shirt-2", quantity:3, like:2},
    {id:3, title:"T-shirt-3", quantity:3, like:2}
  ];
  this.id = this.route.snapshot.params['id'];
}
}
