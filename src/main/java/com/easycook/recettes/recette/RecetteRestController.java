package com.easycook.recettes.recette;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class RecetteRestController {

    @Autowired
    RecetteService recetteService;

    @GetMapping(path = "/recettes")
    public ResponseEntity<?> listRecettes() {
        log.info("RecetteController: liste recettes");
        List<Recette> resource = recetteService.getRecettes();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = "/recette")
    public ResponseEntity<?> saveRecette(@RequestBody Recette recette) {
        log.info("RecetteController: liste recettes");
        Recette resource = recetteService.saveRecette(recette);
        return ResponseEntity.ok(resource);
    }
}
