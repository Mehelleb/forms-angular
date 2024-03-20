import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user!:User;
ngOnInit(): void {
  this.user=new User();
}
save(f: NgForm){
  console.log(f.value['password'])
}
}
