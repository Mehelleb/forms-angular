import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes=[
  {path:"", component: HomeComponent},
{path:"home", component: ProductsComponent},
{path:"add", component: FormProductComponent},
{path:"log", component: FormComponent},
{path:"not", component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
