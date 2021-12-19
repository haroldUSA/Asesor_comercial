package com.ciclo4.reto3.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "db_secuence")
@Data                                                               //Para no escribir los get y set
@NoArgsConstructor
@AllArgsConstructor
public class DbSequence {
    @Id
    private String id;
    private int seq;
    
}
