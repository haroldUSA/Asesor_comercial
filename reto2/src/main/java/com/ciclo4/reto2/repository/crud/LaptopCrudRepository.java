package com.ciclo4.reto2.repository.crud;

import com.ciclo4.reto2.model.Laptop;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface LaptopCrudRepository extends MongoRepository<Laptop, Integer> {


}
