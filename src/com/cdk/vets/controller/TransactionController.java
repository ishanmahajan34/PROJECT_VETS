package com.cdk.vets.controller;

import com.cdk.vets.model.Transaction;
import com.cdk.vets.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    @RequestMapping(value = "/addBuyTransaction", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public int saveBuyDetails(@RequestBody Transaction transaction) {
        return transactionService.saveBuyDetails(transaction);
    }

    @RequestMapping(value = "/showTransaction/{id}", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public Transaction showTransactions(@PathVariable int id) {
        return transactionService.showTransaction(id);
    }
}
