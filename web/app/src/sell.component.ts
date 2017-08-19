import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'sellCar',
    templateUrl: '../partials/sell.html',
    // template : '<h1>{{model}}</h1>'
    //styleUrls:['../css/carsearch.component.styles.css'],
})
export class SellCarComponent implements OnInit {


    username:string = "";


    constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    }


    ngOnInit() {
    }

    newCustomer(){
        var newCustomerLink = ['/register'];
        this.router.navigate(newCustomerLink);
    }
    registeredCustomer(){
        var registeredCustomerLink = ['/emailFind/'];
        this.router.navigate(registeredCustomerLink);
    }
}

