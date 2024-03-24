import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormProductComponent,
    ProductsComponent,
    HomeComponent,
    DetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
