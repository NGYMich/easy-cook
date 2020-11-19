package com.easycook.recettes.ingredient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface IIngredientRepository extends JpaRepository<Ingredient, Long> {}
