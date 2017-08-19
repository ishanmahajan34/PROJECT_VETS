package com.cdk.vets.dao;

import com.cdk.vets.model.Car;
import com.cdk.vets.model.Customer;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class CustomerDAO {

    @PersistenceContext
    EntityManager entityManager;


    //    public void update(String username) {
//        Customer customer = entityManager.find(Customer.class, username);
//        entityManager.merge(customer);
//    }
//
    public Customer selectById(int id) {
        return entityManager.find(Customer.class, id);
    }

    @Transactional
    public int save(Customer customer) {
//        entityManager.merge(customer.getCarList());
        entityManager.merge(customer);
        entityManager.flush();
        return customer.getCustomerId();
    }

    public void delete(Integer id) {
        Customer customer = entityManager.find(Customer.class, id);
        entityManager.remove(customer);
    }


    public Customer login(String email) {
        return (Customer)entityManager.createQuery("FROM Customer c where c.email ='" + email + "'").getSingleResult();
    }

    public void update(Customer customer) {
        entityManager.merge(customer);
    }


//    public List<Customer> selectAll(){
//        return entityManager.createQuery("from Customer").getResultList();
//
//    }


//    public void delete(String username) {
//        Customer customer = entityManager.find(Customer.class, username);
//        entityManager.remove(customer);
//    }


}
