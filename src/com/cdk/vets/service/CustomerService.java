package com.cdk.vets.service;

import com.cdk.vets.dao.CustomerDAO;
import com.cdk.vets.model.Car;
import com.cdk.vets.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;


@Service
public class CustomerService {

    @Autowired
    CustomerDAO customerDAO;


//    @Transactional
//    public Boolean checkLogin(String username, String password) {
//        if (password.equals(customerDAO.selectByUsername(username).getPassword())) {
//            return true;
//        } else {
//            return false;
//        }
//    }

    @Transactional
    public int add(Customer customer) {
        return customerDAO.save(customer);

    }

//    @Transactional
//    public void modify(String username) {
//        customerDAO.update(username);
//    }

    @Transactional
    public Customer login(String email) {
        return customerDAO.login(email);
    }

    @Transactional
    public Customer searchById(Integer id) {
        return customerDAO.selectById(id);
    }


//    @Transactional
//    public List<Customer> readAll() {
//        return customerDAO.selectAll();
//    }

    @Transactional
    public void remove(Integer id) {
        customerDAO.delete(id);
    }

    @Transactional
    public void updateCustomerCar(Customer customer) {
        customerDAO.update(customer);
    }

    @Transactional
    public int searchCustomerByEmail(String email) {
        return customerDAO.getCustomerFromEmail(email);
    }

    public List<Car> findAllByCustomerId(String username) {
        return customerDAO.getAllCars(username);
    }
}
