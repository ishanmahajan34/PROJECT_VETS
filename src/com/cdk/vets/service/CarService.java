package com.cdk.vets.service;

import com.cdk.vets.model.Car;
import com.cdk.vets.dao.CarDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import java.util.Collection;

@Service
public class CarService {

    @Autowired
    CarDAO carDAO;
    @Transactional
    public int save(Car car){
        return carDAO.save(car);
    }
}
