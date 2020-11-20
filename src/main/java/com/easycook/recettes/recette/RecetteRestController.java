package com.easycook.recettes.recette;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/api")
public class RecetteRestController {

    @Autowired
    RecetteService recetteService;

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
        Recette resource = recetteService.saveRecette(recette);
        return ResponseEntity.ok(resource);
    }

    @PutMapping(path = "/recette")
    public ResponseEntity<?> updateRecette(@RequestBody Recette recette) {
        log.info("RecetteController: liste recettes");
        Recette resource = recetteService.saveRecette(recette);
        return ResponseEntity.ok(resource);
    }

/*    @DeleteMapping(path = "/recette/{recetteId}")
    public ResponseEntity<Long> deleteRecette(@PathVariable Optional<Long> recetteId, @PathVariable Optional<String> name) {
        recetteService.deleteRecetteByIdOrName(recetteId, name);
        return new ResponseEntity<>(HttpStatus.OK);
    }*/


}
