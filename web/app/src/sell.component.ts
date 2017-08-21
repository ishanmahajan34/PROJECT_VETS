import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "./customer";

@Component({
    selector: 'sellCar',
    templateUrl: '../partials/sellNew.html',
    // template : '<h1>{{model}}</h1>',
    styleUrls:['../css/registercustomer.styles.css','../css/sell.styles.css','../css/bootstrap.min.css','../css/font-awesome.min.css','../css/w3.css','../css/font.css','../css/oswald.css','../css/global.css'],
})
export class SellCarComponent implements OnInit {


    username:string = "";
    customer: Customer;
    successMessage: string;
    errorMessage: string;
    car: Car;
    carArray: Car[];


    constructor(private http: Http,private router: Router, private activatedRoute:ActivatedRoute) {
        this.car = new Car("", "", 0, 0, 0, "");
        this.carArray = [this.car];
        console.log("CarArray");
        console.log(this.carArray);
        console.log("Out of CarArray");

        this.customer = new Customer("", "", "", "", this.carArray);
        console.log("INSIDE REGISTER CUSTOMER !!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }


    ngOnInit() {
    }

    addCustomer() {
        console.log("Inside addCustomer()!!!!000000000000000000000000000000");
        let addUrl = "/rest/registerCustomer";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        console.log(this.customer);
        console.log("BREAK LINE");
        console.log(this.car);
        console.log("BREAK LINE");
        console.log(this.carArray);

        this.http.post(addUrl, this.customer, options).subscribe(
            res => {
                this.successMessage = res.toString();

                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });

    }


    // newCustomer(){
    //     var newCustomerLink = ['/register'];
    //     this.router.navigate(newCustomerLink);
    // }
    // registeredCustomer(){
    //     var registeredCustomerLink = ['/emailFind/'+this.username];
    //     this.router.navigate(registeredCustomerLink);
    // }

    addNewCar() {
        if(this.username === "" && this.customer.name === ""){

        }
        else if(this.username !== "" && this.customer.name === "") {
            var registeredCustomerLink = ['/emailFind/'+this.username];
            this.router.navigate(registeredCustomerLink);
        }
        else if(this.username === "" && this.customer.name !== "") {
            this.addCustomer();
            var registerCarLink = ['/emailFind/' + this.customer.email];
            this.router.navigate(registerCarLink);
        }
    }


}

