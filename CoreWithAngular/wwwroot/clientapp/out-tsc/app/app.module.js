var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";
import { DataService } from "./shared/dataService";
import { RouterModule } from "@angular/router";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
var routes = [
    { path: "", component: HeroesComponent },
    { path: "checkout", component: Checkout }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                DataService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map