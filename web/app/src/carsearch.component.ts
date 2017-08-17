import {Component, OnInit} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
	selector:'carlist',
    templateUrl:'../partials/carsearch.component.html',
    //styleUrls:['../css/carsearch.component.styles.css'],
})
export class CarSearchComponent implements  OnInit{

	title:string = "Search Your Car";
	cars:Car[];
	//imageUrl:string ="images/";
    searchField:string = "";
    searchFieldValue:string = "";


    constructor(private http:Http) {}


    ngOnInit(){

    }

    searchCars() {
        console.log("Inside searchCars()!!!!");

        var  searchURL = "";

        console.log(this.searchField);
        console.log(this.searchFieldValue);

        if(this.searchField === "" && this.searchFieldValue === "") {
            searchURL = "/rest/cars";
        }else if(this.searchField === "Maximum Price") {
            searchURL = "/rest/car/price/"+this.searchField+"/"+this.searchFieldValue;
        }
        else{
            searchURL = "/rest/car/"+this.searchField+"/"+this.searchFieldValue;
        }


        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.cars = res.json());
    }
}


