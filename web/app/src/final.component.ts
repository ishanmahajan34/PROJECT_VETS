import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Router} from '@angular/router';


import {Customer} from "./customer";
import {Car} from "./car";


@Component({
    selector: 'final',
    templateUrl: '../partials/final.html'

})
export class FinalComponent implements OnInit {

    title: string = "Thank You";
    customer: Customer;
    successMessage: string;
    errorMessage: string;
    // car: Car;
    carID: number;
    username: string;
    make: string;
    model: string;
    // carArray: Car[];

    ngOnInit() {



    }

// {path: 'final/:name/:make/:model', component: FinalComponent},

    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.activatedRoute.params.subscribe(param => {
            this.username = param['name'];
            this.model = param['model'];
            this.make = param['make'];
        });
        // this.car = new Car("", "", 0, 0, 0, "");
        // this.carArray = [this.car];
        // this.customer = new Customer("", "", "", "", this.carArray);
    }

// addCustomer() {
//     console.log("Inside addCustomer()!!!!000000000000000000000000000000");
//     let addUrl = "/rest/registerCustomer";
//
//     var requestHeaders = new Headers({'Content-Type': 'application/json'});
//     var options = new RequestOptions({headers: requestHeaders});
//
//     console.log(this.customer);
//     console.log("BREAK LINE");
//     console.log(this.car);
//     console.log("BREAK LINE");
//     console.log(this.carArray);
//
//     this.http.post(addUrl, this.customer, options).subscribe(
//         res => {
//             this.successMessage = res.toString();
//
//             console.log(res.text());
//             this.errorMessage = ""
//         },
//         error => {
//             this.errorMessage = <any>error;
//             this.successMessage = ""
//         });
//
// }
//
//
// addNewCarToCustomer() {
//     var registerCarLink = ['/emailFind/' + this.customer.email];
//     this.router.navigate(registerCarLink);
// }

    addNewUser() {
        console.log("BREAK LINE");
        console.log("BREAK LINE");

        let addUrl = "/rest/registerCustomer";
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

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


        console.log("BREAK LINE");
        console.log("BREAK LINE");
        var searchURL = "/finalPage/1";
        this.router.navigate([searchURL]);
    }


    registeredCustomer() {

    }

}




