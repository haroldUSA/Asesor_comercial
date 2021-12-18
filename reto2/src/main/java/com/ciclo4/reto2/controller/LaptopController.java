package com.ciclo4.reto2.controller;

import com.ciclo4.reto2.model.Laptop;
import com.ciclo4.reto2.service.LaptopService;
import com.ciclo4.reto2.service.MongoAutosecuencial;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
