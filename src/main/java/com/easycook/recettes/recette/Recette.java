package com.easycook.recettes.recette;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Entity
@Data
public class Recette {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long recette_id;

    @Column
    private String nom;

    @Column
    private String description;
    

    //private List<String> ingredients;


}
