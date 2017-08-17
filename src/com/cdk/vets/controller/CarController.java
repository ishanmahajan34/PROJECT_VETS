package com.cdk.vets.controller;

import com.cdk.vets.model.Car;
import com.cdk.vets.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

import static org.springframework.http.MediaType.*;

import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
public class CarController {

    @Autowired
    private CarService carService;

    @RequestMapping(value = "/car/price/{field}/{fieldValue}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readCarsAsJson(@PathVariable String field,@PathVariable String fieldValue){
        return carService.readCars(field,fieldValue);
    }

    @RequestMapping(value = "/car/{field}/{fieldValue}")
    public Collection<Car> readCarsLessMaxPriceAsJson(@PathVariable String field, @PathVariable String fieldValue) {
        return carService.readCarsLessThanMaxPrice(field, fieldValue);
    }
    @RequestMapping(value = "/cars",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readAllCarsAsJson(){
        return carService.readAllCars();
    }

    @RequestMapping(value = "/uploadCar",consumes = "application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCar(@RequestBody Car car){
        System.out.println(car);
        int value = carService.save(car);
        return "Car with carId '"+value+" ' added successfully!";
    }


}
