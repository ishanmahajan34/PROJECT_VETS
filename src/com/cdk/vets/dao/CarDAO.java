package com.cdk.vets.dao;

import com.cdk.vets.model.Car;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

@Repository
public class CarDAO {

    @PersistenceContext
    EntityManager entityManager;

    public Collection<Car> getAllCars() {
        return (entityManager.createQuery("from Car")).getResultList();
    }


    public int save(Car car) {
        entityManager.persist(car);
        return car.getCarId();
    }

    public Collection<Car> getCars(String field, String fieldValue) {
        return (entityManager.createQuery("from Car where "+field+"='"+fieldValue+"'")).getResultList();
    }

    public Collection<Car> getCarsLessThanMaxPrice(String field, String fieldValue) {
        return (entityManager.createQuery("from Car where " + field + "<='" + fieldValue + "'")).getResultList();
    }
}

