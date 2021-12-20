package com.ciclo4.reto5.controller;

import com.ciclo4.reto5.model.Order;
import com.ciclo4.reto5.service.MongoAutosecuencial;
import com.ciclo4.reto5.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderService orderService;
    
    @Autowired
    private MongoAutosecuencial secuencia;

    @GetMapping("/all")
    public List<Order> getAll() {
        return orderService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Order> getOrder(@PathVariable("id") int id) {
        return orderService.getOrder(id);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Order create(@RequestBody Order gadget) {
        if(gadget.getId()==null){
          gadget.setId(secuencia.getSecuenceNumber(gadget.Sequence_name));   
        }
        return orderService.create(gadget);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Order update(@RequestBody Order gadget) {
        return orderService.update(gadget);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id) {
        return orderService.delete(id);
    }

    @GetMapping("/zona/{zona}")
    public List<Order> findByZone(@PathVariable("zona")String zona){
        return orderService.findByZone(zona);
    }
    
    @GetMapping("/salesman/{id}")
    List<Order> orderSalesManById(@PathVariable("id")int id){
        return orderService.orderSalesManById(id);
    } 
    
    @GetMapping("/state/{state}/{id}")
    public List<Order> orderSalesManByState(@PathVariable("state")String state,@PathVariable("id")int id){
        return orderService.orderSalesManByState(state, id);
    }
    
    @GetMapping("/date/{date}/{id}")
    public List<Order> orderSalesManByDate(@PathVariable("date")String dateStrf,@PathVariable("id")int id){
        return orderService.orderSalesManByDate(dateStrf, id);
    }
}
