package com.easycook.recettes.recette;

import com.easycook.recettes.ingredient.Ingredient;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Entity
@Data
@Table(name = "recette")
public class Recette {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private String temps_total;

    @Column
    private String note;

    @Column
    private String categorie;

    @OneToMany(mappedBy="recette", targetEntity = Ingredient.class)
    private List<Ingredient> liste_ingredients = new ArrayList<Ingredient>();


/*    @ElementCollection
    @CollectionTable(name = "recette_item_maping",
            joinColumns = {@JoinColumn(name = "recette_id", referencedColumnName = "id")})
    @MapKeyColumn(name = "ingredient")
    @Column(name = "quantite_ingredient")
    private Map<String, String> ingredients = new HashMap<>();*/


    //private List<String> ingredients;


}
