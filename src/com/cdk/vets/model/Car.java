package com.cdk.vets.model;

import javax.persistence.*;

import javax.persistence.*;

//enum STATUS {
//    SOLD, AVAILABLE
//}

@Entity
@Table(name = "car_details")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int carId;

    @Column(nullable = false, length = 20)
    private String make;

    @Column(nullable = false, length = 20)
    private String model;

    @Column(nullable = false, length = 4)
    private int year;

    private double price;
    private int distance;
    //    private STATUS status;
    private boolean availability;
    private String image;

    public Car(){

    }

    public Car(String make, String model, int year, double price, int distance, String image,boolean availability) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.distance = distance;
//        this.status = status;
        this.image = image;
        this.availability = availability;
    }

    public Car(int carId,String make, String model, int year, double price, int distance, String image, boolean availability) {
        this.carId = carId;
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
        this.distance = distance;
//        this.status = status;
        this.image = image;
        this.availability = availability;
    }

    public int getCarId() {
        return carId;
    }

    public void setCarId(int carId) {
        this.carId = carId;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

//    public STATUS getStatus() {
//        return status;
//    }

//    public void setStatus(STATUS status) {
//        this.status = status;
//    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "Car{" +
                "carId=" + carId +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", availability=" + availability +
                ", price=" + price +
                ", distance=" + distance +
                ", image='" + image + '\'' +
                '}';
    }
}
