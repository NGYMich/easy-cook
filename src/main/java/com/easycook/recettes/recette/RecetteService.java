package com.easycook.recettes.recette;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecetteService {

    private final IRecetteRepository recetteRepository;

    public RecetteService(IRecetteRepository recetteRepository) {
        this.recetteRepository = recetteRepository;
    }

    public Recette findByRecetteId(Long recetteId) {
        return recetteRepository.findByRecetteId(recetteId);
    }

    public List<Recette> getRecettes() {
        return recetteRepository.findAll();
    }

    public Recette saveRecette(Recette recette) {
        return recetteRepository.save(recette);
    }

    public void deleteRecetteByRecetteIdOrNom(Optional<Long> recetteId, Optional<String> name) {
        recetteRepository.deleteRecetteByRecetteIdOrNom(recetteId, name);
    }
}
