package com.ciclo4.reto2.service;

import com.ciclo4.reto2.model.Laptop;
import com.ciclo4.reto2.repository.LaptopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LaptopService {

    @Autowired
    LaptopRepository laptopRepository;

    public List<Laptop> getAll(){
        return laptopRepository.getAll();
    }

    public Optional<Laptop> getLaptop(int id){
        return laptopRepository.getLaptop(id);
    }

    public Laptop create(Laptop laptop){
        if(laptop.getId() == null){
            return laptop;
        }
        else {
            Optional<Laptop> laptopOptional = laptopRepository.getLaptop(laptop.getId());
            if(laptopOptional.isEmpty()){
                return laptopRepository.create(laptop);
            }else{
                return laptop;
            }
        }
    }

    public Laptop update(Laptop laptop){
        if(laptop.getId() !=null) {
            Optional<Laptop> optionalLaptop = laptopRepository.getLaptop(laptop.getId());
            if(!optionalLaptop.isEmpty()){
                if(laptop.getBrand() != null){
                    optionalLaptop.get().setBrand(laptop.getBrand());
                }
                if(laptop.getModel() != null){
                    optionalLaptop.get().setModel(laptop.getModel());
                }
                if(laptop.getProcesor() != null){
                    optionalLaptop.get().setProcesor(laptop.getProcesor());
                }
                if(laptop.getOs() != null){
                    optionalLaptop.get().setOs(laptop.getOs());
                }
                if(laptop.getDescription() != null){
                    optionalLaptop.get().setDescription(laptop.getDescription());
                }
                if(laptop.getMemory() != null){
                    optionalLaptop.get().setMemory(laptop.getMemory());
                }
                if(laptop.getHardDrive() != null){
                    optionalLaptop.get().setHardDrive(laptop.getHardDrive());
                }
                if(laptop.getPrice() != 0.00){
                    optionalLaptop.get().setPrice(laptop.getPrice());
                }
                if(laptop.getQuantity() != 0){
                    optionalLaptop.get().setQuantity(laptop.getQuantity());
                }
                if(laptop.getPhotography() != null){
                    optionalLaptop.get().setPhotography(laptop.getPhotography());
                }

                laptopRepository.update(optionalLaptop.get());
                return optionalLaptop.get();

            }else {
                return laptop;
            }
        }else {
            return laptop;
        }
    }

    public boolean delete(int id){
        Optional<Laptop> laptopOptional = laptopRepository.getLaptop(id);
        if(!laptopOptional.isEmpty()){
            laptopRepository.delete(laptopOptional.get());
            return true;
        }
        return false;
    }
}

