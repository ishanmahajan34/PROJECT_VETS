package com.cdk.vets.service;

import com.cdk.vets.dao.TransactionDAO;
import com.cdk.vets.model.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    TransactionDAO transactionDAO;

    @Transactional
    public int saveBuyDetails(Transaction transaction){
        return transactionDAO.save(transaction);
    }

    @Transactional
    public Transaction showTransaction(int id) {
        return transactionDAO.retrive(id);
    }



}
