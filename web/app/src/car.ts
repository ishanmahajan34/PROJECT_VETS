export class Car {

    make: string = "";
    model: string = "";
    year: number;
    price: number;
    distance: number;
    availability: boolean = true;
    image: string = "";


    constructor(make: string, model: string, year: number, price: number, distance: number, image: string) {
        console.log("INSIDE CAR!!!!!!!!!!!!!!!!!!2222222222222222");
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.distance = distance;
        this.availability = true;
        this.image = image;
    }
}