package com.easycook.recettes.ingredient;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class IngredientRestController {

    @Autowired
    IngredientService ingredientService;

    @GetMapping(path = "/ingredients")
    public ResponseEntity<?> listIngredients() {
        log.info("IngredientController: liste ingredients");
        List<Ingredient> resource = ingredientService.getIngredients();
        return ResponseEntity.ok(resource);
    }
    @PostMapping(path = "/ingredients")
    public ResponseEntity<?> saveIngredient(@RequestBody Ingredient ingredient) {
        log.info("IngredientController: liste ingredients");
        Ingredient resource = ingredientService.saveIngredient(ingredient);
        return ResponseEntity.ok(resource);
    }
}
