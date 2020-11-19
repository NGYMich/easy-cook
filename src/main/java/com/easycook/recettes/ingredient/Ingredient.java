package com.easycook.recettes.ingredient;

import com.easycook.recettes.recette.Recette;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ingredient")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long ingredient_id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "recette_id", referencedColumnName = "recette_id")
    private Recette recette;
    @Column
    private String nom;
    @Column
    private String quantite;
    @Column
    private String lien_image;

}
