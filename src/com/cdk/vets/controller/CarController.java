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


    @RequestMapping(value = "/uploadCar",consumes = "application/json" ,produces = TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCar(@RequestBody Car car){
        System.out.println(car);
        int value = carService.save(car);
        return "Car with carId '"+value+" ' added successfully!";
    }


}
