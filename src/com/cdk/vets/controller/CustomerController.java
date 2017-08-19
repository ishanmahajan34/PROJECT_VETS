package com.cdk.vets.controller;

import com.cdk.vets.model.Car;
import com.cdk.vets.model.Customer;
import com.cdk.vets.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;
import static org.springframework.util.MimeTypeUtils.TEXT_PLAIN_VALUE;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @RequestMapping(value = "/registerCustomer", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE, method = RequestMethod.POST)
    public String addCustomer(@RequestBody Customer customer) {
        int id = customerService.add(customer);
//        return "Customer with " + customer.getCustomerId()+ " added successfully!!!";
        return String.valueOf(customer.getCustomerId());
    }

    @RequestMapping(value = "/removeCustomer/{id}", produces = MediaType.TEXT_PLAIN_VALUE, method = RequestMethod.DELETE)
    public void removeCustomer(@PathVariable Integer id) {
        customerService.remove(id);
    }

//    @RequestMapping(value = "/updateCustomer/{id}",consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
//    public void updateCustomer(@PathVariable String username, @RequestBody ) {
//
//    }

    @RequestMapping(value = "/getList/{email}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public Collection<Car> readCusomersByUsername(@PathVariable String email) {
        return customerService.login(email).getCarSet();
    }

    @RequestMapping(value = "/addCarByEmail/{email}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public void readCusomersByUsername(@PathVariable String email, @RequestBody Car car) {
        System.out.println("-----------------------------------------------------------");
        Customer customer =  customerService.login(email);
        customer.getCarSet().add(car);
        System.out.println("-----------------------------------------------------------");
        System.out.println(customer.getCarSet());
        System.out.println("-----------------------------------------------------------");
        customerService.updateCustomerCar(customer);
    }


//    @RequestMapping(value = "/registerCustomer",consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.POST)
//    public Customer registerCustomer(@RequestBody Customer customer){
//        System.out.println(customer);
//        customerService.add(customer);
//        return customer;
//    }


    //ERROR IN THIS FUNCTIONALITY
//    @RequestMapping(value = "/updateCustomer/{email}",consumes = MediaType.APPLICATION_JSON_VALUE ,produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.POST)
//    public Customer updateCustomer(@PathVariable String username, @RequestBody Customer customer){
//        System.out.println(customer);
//        customerService.modify(username);
//        return customer;
//    }


//    @RequestMapping(value = "/deleteCustomer/{username}",produces = MediaType.TEXT_PLAIN_VALUE ,method = RequestMethod.DELETE)
//    public String deleteCustomer(@PathVariable String username){
//        customerService.remove(username);
//        return "Customer with " + username +" deleted successfully!";
//    }

//    @RequestMapping(value = "/customers",produces = MediaType.APPLICATION_JSON_VALUE ,method = RequestMethod.GET)
//    public Collection<Customer> readAllCustomersAsJSON(){
//        return customerService.readAll();
//    }
//
//    @RequestMapping(value = "/customers",produces = MediaType.APPLICATION_XML_VALUE ,method = RequestMethod.GET)
//    public Collection<Customer> readAllCustomersAsXML(){
//        return customerService.readAll();
//    }


    //
    @RequestMapping(value = "/customer/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public Customer readCusomerById(@PathVariable Integer id) {
        return customerService.searchById(id);
    }


}
