import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Customer} from "./customer";

@Component({
    selector:'myApp',
    templateUrl:'../partials/cust.html'
    // template: '<h1>hello</h1>',
    // styleUrls:['../css/car.component.styles.css'],
})
export class RegisterCustomerComponent{

    title:string ="Customer Registration Form";
    customer:Customer;
    successMessage:string;
    errorMessage:string;


    constructor(private http:Http) {
        this.customer = new Customer("ishan","mahajanish343@gmail.com","8390703981","Pune");
        console.log("INSIDE Customer");
    }

    addCustomer() {
        console.log("Inside addCustomer()!!!!");
        let addUrl = "/rest/registerCustomer";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        // this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.customer, options).subscribe(
            res => {
                this.successMessage = res.toString();
                console.log(res.text());
                this.errorMessage=""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
    }
}



