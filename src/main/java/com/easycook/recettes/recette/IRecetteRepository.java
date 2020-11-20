package com.easycook.recettes.recette;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface IRecetteRepository extends JpaRepository<Recette, Long> {

    Recette findByRecetteId(Long recetteId);

    //void deleteRecetteByIdOrName(Optional<Long> recetteId, Optional<String> name);
}
