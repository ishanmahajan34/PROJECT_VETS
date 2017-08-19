package com.cdk.vets.service;

import com.cdk.vets.model.Car;
import com.cdk.vets.dao.CarDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import java.util.Collection;

import static java.util.stream.Collectors.toList;

@Service
public class CarService {

    @Autowired
    CarDAO carDAO;

    @Transactional
    public int save(Car car) {
        return carDAO.save(car);
    }

    @Transactional
    public Collection<Car> readAllCars() {
        return carDAO.getAllCars();
    }

    public Collection<Car> readCars(String field, String fieldValue) {
        return carDAO.getCars(field, fieldValue);
    }

    public Collection<Car> readCarsLessThanMaxPrice(String field, String fieldValue) {
        return carDAO.getCarsLessThanMaxPrice(field, fieldValue);
    }

    public List<String> displayCarMake() {
        return carDAO.getMakes();
    }

    public List<String> displayCarModels(String make) {
        return carDAO.getModel(make);
    }

    public List<Car> displayCarsByModel(String model) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getModel().equalsIgnoreCase(model))
                .collect(toList());
    }

    public List<Car> dispayCarsByMake(String make) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getMake().equalsIgnoreCase(make))
                .collect(toList());
    }

    public List<Car> dispayCarsByMakeAndPrice(String make, double price) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getMake().equalsIgnoreCase(make))
                .filter(car -> car.getPrice() < price)
                .collect(toList());
    }

    public List<Car> dispayCarsByModelAndPrice(String model, double price) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getModel().equalsIgnoreCase(model))
                .filter(car -> car.getPrice() < price)
                .collect(toList());
    }

    public Car findSelectedCar(String make, String model, int disance, int year) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getMake().equalsIgnoreCase(make))
                .filter(car -> car.getModel().equalsIgnoreCase(model))
                .filter(car -> car.getDistance() == disance)
                .filter(car -> car.getYear() == year)
                .findFirst()
                .get();
    }

    public Car returnSelectedCar(int id) {
        return carDAO.getAllCars().stream()
                .filter(car -> car.getCarId() == id)
                .findFirst()
                .get();
    }
}
