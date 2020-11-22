import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-ajout-modification-recette-page',
  templateUrl: './ajout-modification-recette-page.component.html',
  styleUrls: ['./ajout-modification-recette-page.component.css']
})
export class AjoutModificationRecettePageComponent implements OnInit {

  addRecipeFormIsShown = true;
  modifyRecipeFormIsShown = false;
  deleteRecipeFormIsShown = false;
  ingredientForm: FormGroup;
  etapeForm: FormGroup;
  categories = ['Entrée', 'Plat', 'Dessert', 'Autres'];
  constructor(private formBuilder: FormBuilder,
  private formBuilder2: FormBuilder) { }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      ingredients: this.formBuilder.array([])
    })
    this.etapeForm = this.formBuilder.group({
      etapes: this.formBuilder2.array([])
    })
  }

  get ingredients() {
    return this.ingredientForm.get('ingredients') as FormArray;
  }

  get etapes() {
    return this.etapeForm.get('etapes') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.group({nom:'', quantite: ''}));
    console.log(this.ingredients.value[0].nom);
  }

  addEtape() {
    this.etapes.push(this.formBuilder2.group({nom:''}));
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

  addRecette () {
    console.log(this.ingredients.value[0].nom)
  }
}

