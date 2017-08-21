import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";

import {Car} from "./car";
import {ActivatedRoute, Router} from "@angular/router";
import {SelectedCar} from "./selectedcar";


@Component({
    selector: 'carlist',
    templateUrl: '../partials/searchCars.html',
    styleUrls:['../css/w3.css','../css/searchcar.styles.css','../css/bootstrap.min.css','../css/oswald.css'],
})


export class CarSearchComponent implements OnInit {

    title: string = "Search Your Car";
    cars: Car[];
    //imageUrl:string ="images/";
    searchField: string = "";
    searchPrice: string = "";
    searchMake: string = "";
    searchModel: string = "";
    make: string[];
    model: string[];
    fCAR: SelectedCar;
    tempID: string = "";
    buttonView : boolean;

    constructor(private http: Http, private router: Router, private activatedRouter: ActivatedRoute) {
    }


    ngOnInit() {
        this.buttonView = false;
    }


    displayMakes() {
        var makeURL = "/rest/carMakes";
        var tempURL = "";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(makeURL, options).subscribe(res => this.make = res.json());

    }

    displayModels() {
        var makeURL = "/rest/carModels/" + this.searchMake;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(makeURL, options).subscribe(res => this.model = res.json());
    }

//------------------------------------------------------------------------------------------------------


    detailedCar(car: Car) {

        var carURL = "/rest/select/" + car.make + "/" + car.model + "/" + car.distance + "/" + car.year;


        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(carURL, options).subscribe(res => {
            this.tempID = res.json().toString();
        });

        this.buttonView = true;




    }

//------------------------------------------------------------------------------------------------------

    proceedCar() {
        var dispLink = '/viewSelectedCar/' + this.tempID;
        this.router.navigate([dispLink]);
    }

    getCars() {
        var searchURL = "";
        if (this.searchMake === "" && this.searchModel === "" && this.searchPrice === "") {
            searchURL = "/rest/cars";
        } else if (this.searchMake !== "" && this.searchModel === "" && this.searchPrice === "") {
            searchURL = "/rest/cars/make/" + this.searchMake;
        } else if (this.searchPrice === "" && this.searchModel !== "") {
            searchURL = "/rest/cars/model/" + this.searchModel;
        } else if (this.searchModel !== "" && this.searchPrice !== "") {
            searchURL = "/rest/cars/modelAndPrices/" + this.searchModel + "/" + this.searchPrice;
        } else if (this.searchModel === "" && this.searchPrice !== "" && this.searchMake !== "") {
            searchURL = "/rest/cars/makeAndPrices/" + this.searchMake + "/" + this.searchPrice;
        }

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
    }

}




