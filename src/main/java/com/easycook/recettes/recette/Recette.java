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

    @Column
    private String lien_image;

    @Column
    private String lien_video;

    @Column
    private String temps_preparation;

    @Column
    private String temps_cuisson;

    @Column
    private String note;


    //private List<String> ingredients;


}
