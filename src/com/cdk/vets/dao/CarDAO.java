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

import static java.util.stream.Collectors.toList;

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
        return (entityManager.createQuery("from Car where " + field + "='" + fieldValue + "'")).getResultList();
    }

    public Collection<Car> getCarsLessThanMaxPrice(String field, String fieldValue) {
        return (entityManager.createQuery("from Car where " + field + "<='" + fieldValue + "'")).getResultList();
    }

    public List<String> getMakes() {
        List<String> makes = getAllCars()
                .stream()
                .map(Car::getMake)
                .distinct()
                .collect(toList());
        return makes;
    }

    public List<String> getModel(String make) {
        return getAllCars()
                .stream()
                .filter(car -> car.getMake().equalsIgnoreCase(make))
                .map(Car::getModel)
                .distinct()
                .collect(toList());
    }


}

