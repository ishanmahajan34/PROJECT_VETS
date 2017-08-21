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


    @RequestMapping(value = "/carMakes",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<String> displayMake(){
        return carService.displayCarMake();
    }

    @RequestMapping(value = "/carModels/{make}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<String> displayModels(@PathVariable String make){
        return carService.displayCarModels(make);
    }


    @RequestMapping(value = "/cars/model/{model}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> displayCarByModels(@PathVariable String model){
        return carService.displayCarsByModel(model);
    }



    @RequestMapping(value = "/cars/makeAndPrices/{make}/{price}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> displayCarByMakeBelowPrice(@PathVariable String make, @PathVariable String price){
        return carService.dispayCarsByMakeAndPrice(make,Double.parseDouble(price));
    }


    @RequestMapping(value = "/cars/modelAndPrices/{model}/{price}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> displayCarByModelBelowPrice(@PathVariable String model, @PathVariable String price){
        return carService.dispayCarsByModelAndPrice(model,Double.parseDouble(price));
    }


    @RequestMapping(value = "/cars/make/{make}",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> displayCarByMakes(@PathVariable String make){
        return carService.dispayCarsByMake(make);
    }




    @RequestMapping(value = "/select/{make}/{model}/{distance}/{year}",produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.GET)
    public int viewSelectedCar(@PathVariable String make, @PathVariable String model, @PathVariable int distance, @PathVariable int year){
        return carService.findSelectedCar(make,model,distance,year).getCarId();
    }


    @RequestMapping(value = "/findCar/{id}",produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.GET)
    public Car returnSelectedCar(@PathVariable int id){
        return carService.returnSelectedCar(id);
    }


//    @RequestMapping(value = "/carModels/{make}",produces = "application/json" ,method = RequestMethod.GET)
//    public Collection<String> displayModels(@PathVariable String make){
//        return carService.displayCarModels(make);
//    }


//    @RequestMapping(value = "/carAge/{age}",produces = "application/json" ,method = RequestMethod.GET)
//    public Collection<String> displayCarsByAge(@PathVariable int age){
//        return carService.displayCarByAge(age);
//    }


//    @RequestMapping(value = "/findCars/{field}/{fieldValue}")
//    public Collection<Car> readCarsLessMaxPriceAsJson(@PathVariable String field, @PathVariable String fieldValue) {
//        return carService.readCarsLessThanMaxPrice(field, fieldValue);
//    }


//    @RequestMapping(value = "/car/{field}/{fieldValue}")
//    public Collection<Car> readCarsLessMaxPriceAsJson(@PathVariable String field, @PathVariable String fieldValue) {
//        return carService.readCarsLessThanMaxPrice(field, fieldValue);
//    }
    @RequestMapping(value = "/cars",produces = "application/json" ,method = RequestMethod.GET)
    public Collection<Car> readAllCarsAsJson(){
        return carService.readAllCars();
    }

    @RequestMapping(value = "/uploadCar",consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.TEXT_PLAIN_VALUE ,method = RequestMethod.POST)
    public String addCar(@RequestBody Car car){
        System.out.println(car);
        int value = carService.save(car);
        return "Car with carId '"+value+" ' added successfully!";
    }



    @RequestMapping(value = "/updateAvailability/{id}", produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.GET)
    public String updateCarAvailibity(@PathVariable int id){

        int value = carService.update(id);
        return "Car with carId '"+value+" ' updated successfully!";
    }
}
