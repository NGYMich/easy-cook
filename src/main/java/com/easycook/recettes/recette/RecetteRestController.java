package com.easycook.recettes.recette;

import com.easycook.recettes.ingredient.Ingredient;
import com.easycook.recettes.ingredient.IngredientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api")
public class RecetteRestController {

    @Autowired
    RecetteService recetteService;

    @Autowired
    IngredientService ingredientService;

    @GetMapping(path = "/recettes")
    public ResponseEntity<?> listRecettes() {
        log.info("RecetteController: liste recettes");
        List<Recette> listeRecettes = recetteService.getRecettes();
        return ResponseEntity.ok(listeRecettes);
    }

    @GetMapping(path = "/recette/{recette_id}")
    public ResponseEntity<?> recetteById(@PathVariable("recette_id") Long recetteId) {
        log.info("RecetteController: recette by id : " + recetteId);

        Recette recette = recetteService.findByRecetteId(recetteId);
        return ResponseEntity.ok(recette);
    }

    @PostMapping(path = "/recette")
    public ResponseEntity<?> saveRecette(@RequestBody Recette recette) {
        log.info("RecetteController: liste recettes");

        Ingredient ingredient = null;
        Recette resource = null;
        List<Ingredient> listIngredients = new ArrayList<Ingredient>();

        if(recette != null) {
            Recette r = new Recette();

            if(recette.getListe_ingredients().size() > 0) {
                for (int i=0; i < recette.getListe_ingredients().size(); i++) {
                    ingredient = new Ingredient();
                    //ingredient.setIngredient_id(recette.getListe_ingredients().get(i).getIngredient_id());
                    ingredient.setNom(recette.getListe_ingredients().get(i).getNom());
                    ingredient.setQuantite(recette.getListe_ingredients().get(i).getQuantite());
                    ingredient.setLien_image(recette.getListe_ingredients().get(i).getLien_image());
                    ingredient.setRecette(recette);
                    listIngredients.add(ingredient);
                }
            }

            recette.setListe_ingredients(listIngredients);
            resource = recetteService.saveRecette(recette);
            ingredientService.saveIngredient(ingredient);


        }



        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = "/recette")
    public ResponseEntity<?> updateRecette(@RequestBody Recette recette) {
        log.info("RecetteController: liste recettes");
        Recette resource = recetteService.saveRecette(recette);
        return ResponseEntity.ok(resource);
    }

    @Transactional
    @DeleteMapping(path = "/recette/{recetteId}")
    public ResponseEntity<Long> deleteRecette(@PathVariable Optional<Long> recetteId, @PathVariable Optional<String> name) {
        recetteService.deleteRecetteByRecetteIdOrNom(recetteId, name);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
