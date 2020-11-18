package com.easycook.recettes.recette;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@RepositoryRestResource
public interface IRecetteDAO extends JpaRepository<Recette, Integer>, JpaSpecificationExecutor<Recette>, QuerydslPredicateExecutor<Recette> {

}
