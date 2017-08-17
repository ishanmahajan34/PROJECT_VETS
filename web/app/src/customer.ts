import {Car} from "./car";

export class Customer {


    // customerId: number;
    name: string = "";
    email: string = "";
    phoneNumber: string = "";
    city: string = "";
    // car:Car

    constructor(name: string, email: string, phoneNumber: string, city: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }
}