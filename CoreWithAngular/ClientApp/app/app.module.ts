import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";

import { DataService } from "./shared/dataService";
import { HeroService } from "./hero.service";

import { RouterModule } from "@angular/router";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

let routes = [
    { path: "", component: HeroesComponent },
    { path: "checkout", component: Checkout }
];


@NgModule({
  declarations: [
      AppComponent,
      Shop,
      Checkout,
      HeroesComponent,
      HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false // for Debuging of the Routes
      })
  ],
    providers: [
      DataService,
      HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
