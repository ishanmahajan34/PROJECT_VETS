import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Customer} from "./customer";
import {Car} from "./car";

@Component({
    selector: 'register',
    templateUrl: '../partials/cust.html'
    // styleUrls:['../css/car.component.styles.css'],
})
export class RegisterCustomerComponent {

    title: string = "Customer Registration Form";
    customer: Customer;
    car: Car;
    successMessage: string;
    errorMessage: string;


    constructor(private http: Http) {
        this.customer = new Customer("ishan", "mahajanish343@gmail.com", "8390703981", "Pune");
        console.log("INSIDE Customer");
    }

    addCustomer() {
        console.log("Inside addCustomer()!!!!");
        let addUrl = "/rest/registerCustomer";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.post(addUrl, this.customer, options).subscribe(
            res => {
                this.successMessage = res.toString();
                // this.customer.customerId = parseInt(this.successMessage, 10);
                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }

}



