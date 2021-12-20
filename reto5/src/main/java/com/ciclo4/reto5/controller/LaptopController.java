package com.ciclo4.reto5.controller;

import com.ciclo4.reto5.model.Laptop;
import com.ciclo4.reto5.service.LaptopService;
import com.ciclo4.reto5.service.MongoAutosecuencial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/laptop")
@CrossOrigin(origins = "*", methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class LaptopController {

    @Autowired
    private LaptopService laptopService;
    
    @Autowired
    private MongoAutosecuencial secuencia; 

    @GetMapping("/all")
    public List<Laptop> getAllLaptops(){
        return laptopService.getAll();
    }
    
    @GetMapping("{id}")
    public Optional<Laptop> getLaptop(@PathVariable("id")int id){
        return laptopService.getLaptop(id);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Laptop create(@RequestBody Laptop laptop){
        if(laptop.getId()==null){
          laptop.setId(secuencia.getSecuenceNumber(laptop.Sequence_name));   
        }
        return laptopService.create(laptop);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Laptop update(@RequestBody Laptop laptop){
        return laptopService.update(laptop);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id")int id){
        return laptopService.delete(id);
    }
    
    @GetMapping("/price/{price}")
    public List<Laptop> getLaptopByPrice(@PathVariable("price")double price){
        return laptopService.getLaptopByPrice(price);
    }
    
    @GetMapping("/description/{desc}")
    public List<Laptop> getLaptopByDescription(@PathVariable("desc")String desc){
        return laptopService.getLaptopByDescription(desc);
    }
    
    
}
