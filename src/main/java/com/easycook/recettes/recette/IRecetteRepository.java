package com.easycook.recettes.recette;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface IRecetteRepository extends JpaRepository<Recette, Long> {}
