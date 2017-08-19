import {Component, OnInit} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";
import {and} from "@angular/router/src/utils/collection";

@Component({
	selector:'carlist',
    templateUrl:'../partials/search.html',
    //styleUrls:['../css/carsearch.component.styles.css'],
})
export class CarSearchComponent implements  OnInit{

	title:string = "Search Your Car";
	cars:Car[];
	//imageUrl:string ="images/";
    searchField:string = "";
    searchPrice:string = "";
    searchMake:string = "";
    searchModel:string = "";
    maxPrice:number;
    make: string[];
    model: string[];

    constructor(private http:Http) {}


    ngOnInit(){

    }



    displayMakes(){
        var makeURL = "/rest/carMakes";
        var tempURL = "";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(makeURL, options).subscribe(res => this.make = res.json());

    }

    displayModels() {
        var makeURL = "/rest/carModels/"+this.searchMake;
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(makeURL, options).subscribe(res => this.model = res.json());
    }

    // displayPrices() {
    //     console.log("models display11111111111111"+this.searchMake);
    //     var makeURL = "/rest/carModels/"+this.searchMake;
    //     var requestHeaders = new Headers({'Accept': 'application/json'});
    //     var options = new RequestOptions({headers: requestHeaders});
    //     this.http.get(makeURL, options).subscribe(res => this.model = res.json());
    // }


    getCars() {
        var  searchURL = "";
        if(this.searchMake === "" && this.searchModel === "" && this.searchPrice === "") {
            searchURL = "/rest/cars";
        }else if(this.searchMake !== "" && this.searchModel === "" && this.searchPrice === ""){
            searchURL = "/rest/cars/make/"+this.searchMake;
        }else if(this.searchPrice === "" && this.searchModel !== ""){
            searchURL = "/rest/cars/model/"+this.searchModel;
        }else if(this.searchModel !== "" && this.searchPrice!== ""){
            searchURL = "/rest/cars/modelAndPrices/"+this.searchModel+"/"+this.searchPrice;
        }else if(this.searchModel === "" && this.searchPrice!== "" && this.searchMake !== ""){
            searchURL = "/rest/cars/makeAndPrices/"+this.searchMake+"/"+this.searchPrice;
        }

        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
    }
    //
    // searchCars() {
    //     console.log("Inside searchCars()!!!!");
    //
    //     var  searchURL = "";
    //
    //     console.log(this.searchField);
    //     console.log(this.searchFieldValue);
    //
    //     if(this.searchField === "" && this.searchFieldValue === "") {
    //         searchURL = "/rest/cars";
    //     }else if(this.searchField === "Maximum Price") {
    //         searchURL = "/rest/car/price/"+this.searchField+"/"+this.maxPrice;
    //     }
    //     else{
    //         searchURL = "/rest/car/"+this.searchField+"/"+this.searchFieldValue;
    //     }
    //
    //
    //     var requestHeaders = new Headers({'Accept': 'application/json'});
    //     var options = new RequestOptions({headers: requestHeaders});
    //
    //     this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
    // }
}


