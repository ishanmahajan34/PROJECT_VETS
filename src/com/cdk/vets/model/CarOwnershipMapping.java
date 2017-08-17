package com.cdk.vets.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ownership_details")
public class CarOwnershipMapping implements Serializable {


    @Id
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "carId")
    private Car car;


    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "customerId")
    private Customer customer;

    public CarOwnershipMapping() {
    }

    public CarOwnershipMapping(Car cars, Customer customer) {
        this.customer = customer;
        this.car = cars;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
