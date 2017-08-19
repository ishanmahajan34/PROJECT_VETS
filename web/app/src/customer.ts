import {Car} from "./car";

export class Customer {

    name: string = "";
    email: string = "";
    phoneNumber: string = "";
    city: string = "";
    cars: Car[];


    constructor(name: string, email: string, phoneNumber: string, city: string, cars: Car[]) {
        console.log("INSIDE CUSTOMER!!!!!!!!!!!!!!!!!!111111111111111111");
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.cars = cars;
    }
}