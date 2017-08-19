import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Router} from '@angular/router';


import {Customer} from "./customer";
import {Car} from "./car";


@Component({
    selector: 'emailFind',
    templateUrl: '../partials/addcarbyusername.html'
    // styleUrls:['../css/car.component.styles.css'],
})
export class ReturningCustomerComponent {

    title: string = "Customer Registration Form";
    customer: Customer;
    successMessage: string;
    errorMessage: string;
    // customerParameter : Parameter;
    // customerId : number;
    car: Car;
    carArray: Car[];
    registeredUsername: string;


    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("INSIDE REGISTER CAR BY EMAIL!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.activatedRoute.params.subscribe(param => {
            this.registeredUsername = param['username'];
        })
        console.log(this.registeredUsername);

        this.car = new Car("", "", 0, 0, 0, "");

        console.log("Out of CarArray");


    }

    addCarForCustomer() {
        console.log("Inside addCarForCustomer()!!!!000000000000000000000000000000");
        let addCarToEmailUrl = "/rest/addCarByEmail/" + this.registeredUsername;

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.post(addCarToEmailUrl, this.car, options).subscribe(
            res => {
                this.successMessage = res.toString();

                console.log(res.text());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });
        //
        // var addCarLink = ['/addNewCar'];
        // this.router.navigate(addCarLink);
    }


    // addCarFromCustomer() {
    //     var addLink = ['/add'];
    //     this.router.navigate(addLink);
    // }

}




