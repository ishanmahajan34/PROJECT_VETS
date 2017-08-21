import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Router} from '@angular/router';


import {Customer} from "./customer";
import {Car} from "./car";
import {Transaction} from "./transaction";


@Component({
    selector: 'exchangeCar',
    templateUrl: '../partials/exchangeCars.html',
    styleUrls: ['../css/registercustomer.styles.css', '../css/sell.styles.css', '../css/bootstrap.min.css', '../css/font-awesome.min.css', '../css/w3.css', '../css/font.css'],

})
export class ExchangeComponent implements OnInit {

    title: string = "Customer Car Buying Form";
    customer: Customer;
    transaction: Transaction;
    successMessage: string;
    errorMessage: string;
    car: Car;
    make: string;
    model: string;
    make1: string;
    model1: string;
    cars: Car[];
    updatedCar: Car;
    exchnageFlag: boolean = false;
    carArray: Car[];
    buyerUsername: string;
    carId: number;
    buyerCarId: number;
    difference: number;
    differenceInverse: number;


    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        console.log("CONSTRUCTOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        this.activatedRoute.params.subscribe(param => {
            this.buyerUsername = param['username'];
            this.carId = param['carId'];

        });
        this.difference = 0;
        this.car = new Car("", "", 0, 0, 0, "");
        this.updatedCar = new Car("", "", 0, 0, 0, "");
        this.carArray = [this.car];
        this.customer = new Customer("", "", "", "", this.carArray);
        this.transaction = new Transaction(0, "", 0, 0);
    }


    ngOnInit() {

        var getCarURL = "/rest/findAllCarOfBuyer/" + this.buyerUsername;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(getCarURL, options).subscribe(res => {
            this.cars = res.json();
            // console.log(res.json());

        });

    }

    swapcar(carVar: Car) {
        console.log("INIT!!!!!!!!!!!!!!!!!!!!!!!!");
        var carURL = "/rest/select/" + carVar.make + "/" + carVar.model + "/" + carVar.distance + "/" + carVar.year;
        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(carURL, options).subscribe(res => {

            this.buyerCarId = res.json().toString();
            console.log(this.buyerCarId);
            console.log(res.json());
            console.log("BUYER ID : !!!!!!!!!!!!!!!!!!!!!");

        });
        var carFindCarURL = "/rest/findCar/" + this.carId;
        this.http.get(carFindCarURL, options).subscribe(res => {
            this.car = res.json();
        });
        this.transaction.customerUsername = this.buyerUsername;
        this.transaction.carId = this.carId;
        this.transaction.amountToPaid = this.car.price - carVar.price;
        this.difference = this.transaction.amountToPaid;
        console.log(this.difference);

        if (this.difference < 0) {
            this.differenceInverse = -1 * this.difference;
        }
        this.transaction.transactionType = 1;
        let transactionalAddURL = "/rest/addBuyTransaction";
        this.http.post(transactionalAddURL, this.transaction, options).subscribe();

        let updateCarURL = "/rest/updateAvailability/" + this.buyerCarId;
        this.updatedCar = this.car;
        this.updatedCar.availability = false;
        this.http.get(updateCarURL, options).subscribe();
        this.make = this.car.make;
        this.model = this.car.model;
        this.make1 = carVar.make;
        this.model1 = carVar.model;
        this.exchnageFlag = true;
        console.log("ENDDDDDDDDDDDDDDDDDDDDDDD");

    }


}




