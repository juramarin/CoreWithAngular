import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";


@Component({
    selector: "the-checkout",
    templateUrl: "checkout.component.html",
    styleUrls: []
})
export class Checkout {

    constructor(private data: DataService) {
        this.products = data.products;
    }

    public products = [];
}