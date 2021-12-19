/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ciclo4.reto3.service;

import com.ciclo4.reto3.model.DbSequence;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import java.util.Objects;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

//import com.javatechie.mongo.entity.DbSequence;
/**
 *
 * @author harld
 */
@Service
public class MongoAutosecuencial {
    @Autowired
    private MongoOperations mongoOperations;
    public int getSecuenceNumber(String secuenceName){
   Query query = new Query(Criteria.where("id").is(secuenceName));    
   Update update = new Update().inc("seq",1);
   DbSequence counter=mongoOperations.findAndModify(query, update, options().returnNew(true).upsert(true),DbSequence.class);
   return !Objects.isNull(counter)? counter.getSeq():1;
    }
}
