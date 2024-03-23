import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes=[
  {path:'products', component: ProductsComponent},
  {path:'form', component: FormComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormProductComponent,
    AddProductComponent,
    NotFoundComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
