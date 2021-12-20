package com.ciclo4.reto5.repository;

import com.ciclo4.reto5.model.User;
import com.ciclo4.reto5.repository.crud.UserCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Criteria;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepository {

    @Autowired
    private UserCrudRepository userCrudRepository;
        
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> getAll(){
        return userCrudRepository.findAll();
    }

    public Optional<User> getUser(int id){                                              //Buscar por ID para el metodo DELETE
        return userCrudRepository.findById(id);
    }

    public boolean existEmail(String email){
        Optional<User> usuario = userCrudRepository.findByEmail(email);

        return !usuario.isEmpty();
    }

    public Optional<User> authenticateUser(String email, String password){
        return userCrudRepository.findByEmailAndPassword(email, password);
    }

    public User create(User user){
        return userCrudRepository.save(user);
    }

    public void update(User user){
        userCrudRepository.save(user);
    }

    public void delete(User user){
        userCrudRepository.delete(user);
    }
    
    public List<User> getUserByMonthBirtday(String month){
        Query query = new Query();
        Criteria criterio = Criteria.where("monthBirthtDay").is(month);      
        query.addCriteria(criterio);
        List<User> Users = mongoTemplate.find(query, User.class);
        return Users;
    }
}
