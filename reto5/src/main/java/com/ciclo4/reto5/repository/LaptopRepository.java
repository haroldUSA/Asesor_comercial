package com.ciclo4.reto5.repository;

import com.ciclo4.reto5.model.Laptop;
import com.ciclo4.reto5.model.Order;
import com.ciclo4.reto5.repository.crud.LaptopCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;

import java.util.List;
import java.util.Optional;

@Repository
public class LaptopRepository {
    
    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private LaptopCrudRepository laptopCrudRepository;

    public List<Laptop> getAll(){
        return laptopCrudRepository.findAll();
    }

    public Optional<Laptop> getLaptop(int id){                          //Buscar por ID para el metodo delete
        return laptopCrudRepository.findById(id);
    }

    public Laptop create(Laptop laptop){
        return laptopCrudRepository.save(laptop);
    }

    public void update(Laptop laptop){
        laptopCrudRepository.save(laptop);
    }

    public void delete(Laptop laptop){
        laptopCrudRepository.delete(laptop);
    }
    
    public List<Laptop> getLaptopByPrice(double price){
        Query query = new Query();
        Criteria criterio= Criteria.where("price").is(price); 
        query.addCriteria(criterio);
        List<Laptop> Laptops = mongoTemplate.find(query, Laptop.class);
        return Laptops;
    }
    
    public List<Laptop> getLaptopByDescription(String desc){
        Query query = new Query();
        Criteria criterio = Criteria.where("description").regex(".*"+desc+"*", "i");      
        query.addCriteria(criterio);
        List<Laptop> Laptops = mongoTemplate.find(query, Laptop.class);
        return Laptops;
    }

}
