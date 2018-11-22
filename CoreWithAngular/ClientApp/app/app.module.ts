import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shop } from "./shop/shop.component";

import { RouterModule } from "@angular/router";

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Shop }
];


@NgModule({
  declarations: [
      AppComponent,
      Shop
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false // for Debuging of the Routes
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
