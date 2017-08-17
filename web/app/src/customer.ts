export class Customer {


    name: string = "";
    email: string = "";
    phoneNumber: string = "";
    city: string = "";

    constructor( name: string, email: string, phoneNumber: string, city: string) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.city = city;
    }
}