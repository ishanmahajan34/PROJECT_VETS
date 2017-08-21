import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Router} from '@angular/router';


import {Customer} from "./customer";
import {Car} from "./car";
import {Transaction} from "./transaction";


@Component({
    selector: 'postBuying',
    templateUrl: '../partials/postBuy.component.html',
    styleUrls: ['../css/registercustomer.styles.css', '../css/sell.styles.css', '../css/bootstrap.min.css', '../css/font-awesome.min.css', '../css/w3.css', '../css/font.css'],

})
export class PostBuyComponent implements OnInit {

    title: string = "Customer Car Buying Form";
    customer: Customer;
    transaction: Transaction;
    successMessage: string;
    errorMessage: string;
    car: Car;
    updatedCar: Car;
    carID: number;
    username: string;
    carArray: Car[];
    buyerId: number;


    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("CONSTRUCTOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.activatedRoute.params.subscribe(param => this.carID = param['id']);
        this.car = new Car("", "", 0, 0, 0, "");
        this.updatedCar = new Car("", "", 0, 0, 0, "");
        this.carArray = [this.car];
        this.customer = new Customer("", "", "", "", this.carArray);
        this.transaction = new Transaction(0, "", 0, 0);
    }


    ngOnInit() {
        console.log("INIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var getCarURL = "/rest/findCar/" + this.carID;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(getCarURL, options).subscribe(res => {
            this.car = res.json();
            console.log(res.json());
            // console.log(this.carNew.model);
            // this.model = this.carNew.model;
            // this.make = this.carNew.make;
            // this.distance = this.carNew.distance;
            // this.year = this.carNew.year;
            // this.price = this.carNew.price;
        });

    }

    addNewUser() {
        console.log("ADD NEW USER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        let addUrl = "/rest/newCustomer";
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.post(addUrl, this.customer, options).subscribe(
            res => {
                this.successMessage = res.toString();

                console.log(res.json());
                this.errorMessage = ""
            },
            error => {
                this.errorMessage = <any>error;
                this.successMessage = ""
            });

        this.transaction.customerUsername = this.customer.email;
        this.transaction.carId = this.carID;
        this.transaction.amountToPaid = 0;
        this.transaction.transactionType = 0;

        console.log(this.transaction.customerUsername);
        console.log(this.transaction.carId);
        console.log(this.transaction.amountToPaid);
        console.log(this.transaction.transactionType);

        let transactionAddURL = "/rest/addBuyTransaction";
        this.http.post(transactionAddURL, this.transaction, options).subscribe();

        let updateCarURL = "/rest/updateAvailability/" + this.carID;
        this.updatedCar = this.car;
        this.updatedCar.availability = false;
        this.http.get(updateCarURL, options).subscribe();

        console.log("BREAK LINE");
        console.log("BREAK LINE");
        var searchURL = "/final/" + this.customer.name + "/" + this.car.make + "/" + this.car.model;
        this.router.navigate([searchURL]);
    }


    registeredCustomerBuy() {
        console.log("USERNAME ENTERED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        let findIdURL = "/rest/getCustomerIdByEmail/" + this.username;
        this.http.get(findIdURL, options).subscribe(res => {
            console.log("HELLO WORLD IS FUNN");
            this.buyerId = res.json();
            console.log(this.buyerId);
        });

        this.transaction.customerUsername = this.username;
        this.transaction.carId = this.carID;
        this.transaction.amountToPaid = 0;
        this.transaction.transactionType = 0;
        let transactionalAddURL = "/rest/addBuyTransaction";
        this.http.post(transactionalAddURL, this.transaction, options).subscribe();
        let updateCarURL = "/rest/updateAvailability/" + this.carID;
        this.updatedCar = this.car;
        this.updatedCar.availability = false;
        this.http.get(updateCarURL, options).subscribe();
        var searchURL = "/final/" + this.username + "/" + this.car.make + "/" + this.car.model;
        console.log(searchURL);
        console.log("BREAK LINE");
        this.router.navigate([searchURL]);

    }

    registeredCustomerExchange() {
        console.log("Exchange SERNAME ENTERED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        // let findIdURL = "/rest/getCustomerIdByEmail/" + this.username;
        // this.http.get(findIdURL, options).subscribe(res => {
        //     this.buyerId = res.json();
        //     console.log(this.buyerId);
        // });

        let updateCarURL = "/rest/updateAvailability/" + this.carID;
        this.updatedCar = this.car;
        this.updatedCar.availability = false;
        this.http.get(updateCarURL, options).subscribe();

        var exchangeURL = "/exchangeCar/" + this.username + "/" + this.carID;
        console.log(exchangeURL);
        this.router.navigate([exchangeURL]);
    }

}




