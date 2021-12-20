package com.ciclo4.reto4.repository.crud;

import com.ciclo4.reto4.model.Laptop;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface LaptopCrudRepository extends MongoRepository<Laptop, Integer> {


}
