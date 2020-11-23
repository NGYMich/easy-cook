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
    @Column(name = "recette_id")
    private Long recetteId;

    @Column(name = "categorie")
    private String categorie;

    @Column(name = "auteur")
    private String auteur;

    @Column(name = "nom")
    private String nom;

    @Column(name = "description")
    private String description;

    @Column(name = "lien_image")
    private String lien_image;

    @Column(name = "lien_video")
    private String lien_video;

    @Column(name = "temps_preparation")
    private String temps_preparation;

    @Column(name = "temps_cuisson")
    private String temps_cuisson;

    @Column(name = "temps_total")
    private String temps_total;

    @Column(name = "note")
    private String note;

    @OneToMany(mappedBy="recette", targetEntity = Ingredient.class, cascade = CascadeType.ALL)
    private List<Ingredient> liste_ingredients = new ArrayList<Ingredient>();

    @ElementCollection
    @CollectionTable(name = "etape", joinColumns = @JoinColumn(name = "recette_id"))
    @Column(name="etape")
    private List<String> liste_etapes = new ArrayList<String>();

}
