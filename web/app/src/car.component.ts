import {Component} from "@angular/core";
import {Http,Headers,RequestOptions} from "@angular/http";

import {Car} from "./car";

@Component({
	selector:'add',
    templateUrl:'../partials/car.component.html',
    styleUrls:['../css/car.component.styles.css'],
})
export class CarComponent{

	title:string ="Car Form";
	car:Car;
	successMessage:string;
    errorMessage:string;


    constructor(private http:Http) {
    //      this.car = new Car(this.car.make,this.car.model,this.car.year,this.car.price,this.car.distance,"merc.jpg");
            this.car= new Car("Audi", "A4",2007,64828,74402,"mercedes.jpg");
     }

    addCar() {
        console.log("Inside addCar()!!!!");
        let addUrl = "/rest/uploadCar";

        var requestHeaders = new Headers({'Content-Type': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        // this.car.logo = this.car.make + '-' + this.car.model + '.png';
        //this.http.post(addUrl,this.car,options).subscribe(res => this.successMessage = res.toString());
        this.http.post(addUrl, this.car, options).subscribe(
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


