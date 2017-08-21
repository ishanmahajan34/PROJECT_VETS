package com.cdk.vets.dao;

import com.cdk.vets.model.Transaction;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;


@Repository
public class TransactionDAO {

    @PersistenceContext
    EntityManager entityManager;

    @Transactional
    public int save(Transaction transaction) {
        entityManager.persist(transaction);
        return transaction.getTransactionId();
    }


    public Transaction retrive(int id) {
        return entityManager.find(Transaction.class, id);

    }


}
