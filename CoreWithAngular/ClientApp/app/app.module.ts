import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";
import { DataService } from "./shared/dataService";

import { RouterModule } from "@angular/router";

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout }
];


@NgModule({
  declarations: [
      AppComponent,
      Shop,
      Checkout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false // for Debuging of the Routes
      })
  ],
    providers: [
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
