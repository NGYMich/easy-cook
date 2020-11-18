package com.easycook.recettes.recette;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class RecetteService {

    private IRecetteRepository recetteRepository;

    public RecetteService(IRecetteRepository recetteRepository) {
        this.recetteRepository = recetteRepository;
    }

    public List<Recette> getRecettes() {
        return recetteRepository.findAll();
    }

    public Recette saveRecette(Recette recette) {
        return recetteRepository.save(recette);
    }

}
