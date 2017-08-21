import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from '@angular/router';


import {Customer} from "./customer";
import {Car} from "./car";


@Component({
    selector: 'register',
    templateUrl: '../partials/cust.html',
    styleUrls:['../css/registercustomer.styles.css','../css/bootstrap.min.css'],

})
export class RegisterCustomerComponent {

    title: string = "Customer Registration Form";
    customer: Customer;
    successMessage: string;
    errorMessage: string;
    // customerParameter : Parameter;
    // customerId : number;
    car: Car;

    carArray: Car[];


    constructor(private http: Http, private router: Router) {

        this.car = new Car("", "", 0, 0, 0, "");
        this.carArray = [this.car];
        console.log("CarArray");
        console.log(this.carArray);
        console.log("Out of CarArray");

        this.customer = new Customer("", "", "", "", this.carArray);
        console.log("INSIDE REGISTER CUSTOMER !!!!!!!!!!!!!!!!!!!!!!!!!!!!");
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


    addNewCarToCustomer() {
        var registerCarLink = ['/emailFind/' + this.customer.email];
        this.router.navigate(registerCarLink);
    }


}




