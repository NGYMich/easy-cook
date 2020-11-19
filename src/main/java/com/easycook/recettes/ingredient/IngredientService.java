package com.easycook.recettes.ingredient;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class IngredientService {

    private final IIngredientRepository ingredientRepository;

    public IngredientService(IIngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient saveIngredient(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
    }

}
