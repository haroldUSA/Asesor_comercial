package com.ciclo4.reto5.controller;

import com.ciclo4.reto5.model.User;
import com.ciclo4.reto5.service.MongoAutosecuencial;
import com.ciclo4.reto5.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", methods={RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class UserController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private MongoAutosecuencial secuencia;

    @GetMapping("/all")
    public List<User> getAllUsers(){
        return userService.getAll();
    }

    @GetMapping("/emailexist/{email}")
    public boolean existEmail(@PathVariable("email") String email){
        return userService.existEmail(email);
    }

    @GetMapping("/{email}/{password}")
    public User authenticateUser(@PathVariable("email") String email, @PathVariable("password") String password){
        return userService.authenticateUser(email, password);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@RequestBody User user){
        if(user.getId()==null){
          user.setId(secuencia.getSecuenceNumber(user.Sequence_name));   
        }
        return userService.create(user);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public User update(@RequestBody User user){
        return userService.update(user);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("id") int id){
        return userService.delete(id);
    }
    
    @GetMapping("{id}")
    public Optional<User> getUser(@PathVariable("id")int id){
        return userService.getUser(id);
    }

    @GetMapping("birthday/{month}")    
    public List<User> getUserByMonthBirtday(@PathVariable("month")String month){
        return userService.getUserByMonthBirtday(month);
    }

}
