import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'viewSelectedCar',
    templateUrl: '../partials/viewCar.html',
    // template : '<h1>{{model}}</h1>'
    //styleUrls:['../css/carsearch.component.styles.css'],
})
export class SelectedCarComponent implements OnInit {

    title: string = "Your Selected Car";
    carNew: Car;
    testCarID: number;
    model:string;
    make:string;
    year:number;
    distance:number;
    price:number;


    constructor(private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(param => {
            console.log("==========================================");
            // console.log(parseInt(param['id']));
            this.testCarID = parseInt(param['id']);
            console.log("==========================================");



        });
    }


    ngOnInit() {
        var searchURL = "/rest/findCar/" + this.testCarID;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        console.log("HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(searchURL, options).subscribe(res => {
            this.carNew = res.json();
            // console.log(res.json());
            console.log(this.carNew.model);
            this.model = this.carNew.model;
            this.make = this.carNew.make;
            this.distance = this.carNew.distance;
            this.year = this.carNew.year;
            this.price = this.carNew.price;
        });

    }

    buy() {


        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        // this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
    }

    exchange() {

    }

}


