import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Form, FormControl} from '@angular/forms';
import {Recette} from "../model/recette";
import {RecetteService} from "../services/RecetteService";

@Component({
  selector: 'app-ajout-modification-recette-page',
  templateUrl: './ajout-modification-recette-page.component.html',
  styleUrls: ['./ajout-modification-recette-page.component.css']
})
export class AjoutModificationRecettePageComponent implements OnInit {

  addRecipeFormIsShown = true;
  modifyRecipeFormIsShown = false;
  deleteRecipeFormIsShown = false;

  informationsForm: FormGroup;
  ingredientForm: FormGroup;
  etapeForm: FormGroup;
  selectedCategory;

  categories = ['Entrée', 'Plat', 'Dessert', 'Autres'];

  constructor(private formBuilder: FormBuilder, private recetteService: RecetteService) {  }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      ingredients: this.formBuilder.array([this.formBuilder.group({nom: '1er ingre', quantite: '100 g'}), this.formBuilder.group({nom: '2e ingre', quantite: '150ml'})])
    })
    this.etapeForm = this.formBuilder.group({
      etapes: this.formBuilder.array([])
    })
    this.informationsForm = this.formBuilder.group({
      nom: new FormControl(''),
      auteur: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
      lien_image: new FormControl(''),
      lien_video: new FormControl(''),
      temps_preparation: new FormControl(''),
      temps_cuisson : new FormControl(''),
      note: new FormControl(''),
    })
  }

  get informations() {
    return this.informationsForm.get('nom') as FormArray;
  }

  get ingredients() {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  get etapes() {
    return this.etapeForm.get('etapes') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.group({nom: '', quantite: ''}));
    console.log(this.ingredients.value[0].nom);
  }

  addEtape() {
    this.etapes.push(this.formBuilder.group({nom_etape: ''}));
  }

  deleteIngredient(index) {
    this.ingredients.removeAt(index);
  }


  deleteEtape(index) {
    this.etapes.removeAt(index);
  }

  showAddRecetteDiv() {
    this.modifyRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = false;
    this.addRecipeFormIsShown = !this.addRecipeFormIsShown;
  }

  showModifyRecetteDiv() {
    this.addRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = false;
    this.modifyRecipeFormIsShown = !this.modifyRecipeFormIsShown;
  }

  showDeleteRecetteDiv() {
    this.addRecipeFormIsShown = false;
    this.modifyRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = !this.deleteRecipeFormIsShown;
  }

  addRecette() {
    var etapesArray = this.etapes.value.map(a => a.nom_etape);
    var ingredientsArray = null;
    console.log(this.ingredients.value);

    const recette: Recette = {
      recetteId: null,
      categorie: this.informationsForm.get('categorie').value,
      auteur: this.informationsForm.get('auteur').value,
      nom: this.informationsForm.get('nom').value,
      description: this.informationsForm.get('description').value,
      lien_image: this.informationsForm.get('lien_image').value,
      lien_video: this.informationsForm.get('lien_video').value,
      temps_preparation: this.informationsForm.get('temps_preparation').value,
      temps_cuisson: this.informationsForm.get('temps_cuisson').value,
      temps_total: null,
      note: this.informationsForm.get('note').value,
      liste_ingredients: this.ingredients.value,
      liste_etapes: etapesArray
    };
    this.recetteService.addRecette(recette);
  }
}

