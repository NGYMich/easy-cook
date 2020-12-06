import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Form, FormControl} from '@angular/forms';
import {Recette} from "../model/recette";
import {RecetteService} from "../services/RecetteService";
import {MatTableDataSource} from "@angular/material/table";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ajout-modification-recette-page',
  templateUrl: './ajout-modification-recette-page.component.html',
  styleUrls: ['./ajout-modification-recette-page.component.css']
})
export class AjoutModificationRecettePageComponent implements OnInit {

  addRecipeFormIsShown = false;
  modifyRecipeFormIsShown = true;
  deleteRecipeFormIsShown = false;
  isRecetteEnregistree = false;
  isRecetteSupprimee = false;
  isSelectedRecette = true;
  isRecetteModifiee = false;

  informationsForm: FormGroup;
  ingredientForm: FormGroup;
  etapeForm: FormGroup;

  selectedCategory;
  selectedRecetteToDelete;
  selectedRecetteToModify = {categorie: "", auteur: "", nom: "", description: "", lien_image: "", lien_vieo: "", temps_preparation: "", temps_cuisson: "", temps_total: "", note: "", liste_ingredient: [], liste_etapes: []};
  //selectedRecetteToModify = new Recette();
  categories = ['Entrée', 'Plat', 'Dessert', 'Autres'];
  listeRecettes;
  deleteOperationSuccessfulSubscription: Subscription;
  constructor(private formBuilder: FormBuilder, private recetteService: RecetteService) {  }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      ingredients: this.formBuilder.array([])
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
    this.getListeRecettes();
    this.deleteOperationSuccessfulSubscription = this.recetteService.deleteOperationSuccessfulEvent$.subscribe();



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

  modifierRecette(){
    console.log(this.selectedRecetteToModify);
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
    this.isRecetteEnregistree = true;
    this.getListeRecettes();
  }

  changeRecetteAffichee(nomRecette) {
    //console.log(nomRecette);

  }
  deleteRecette() {
    // console.log(this.selectedRecetteToDelete)
    this.recetteService.deleteRecette(this.selectedRecetteToDelete);

    this.deleteOperationSuccessfulSubscription = this.recetteService.deleteOperationSuccessfulEvent$
      .subscribe(isSuccessful => {
        if (isSuccessful === true) {
          this.getListeRecettes();
        } else {
          console.log('epic fail');
        }
      });

  }

  async getListeRecettes() {
    this.recetteService.getRecettes().subscribe(data => {
      this.listeRecettes = data;
      console.log(this.listeRecettes);
      this.listeRecettes.forEach(recette => {
        recette.temps_total = this.minToHours(Number(recette.temps_preparation) + Number(recette.temps_cuisson));
        recette.temps_cuisson = this.minToHours(Number(recette.temps_cuisson));
        recette.temps_preparation = this.minToHours(Number(recette.temps_preparation));
      })
    })
  }


  minToHours(minutes: number) {
    var newMinutes, newHours, newTime;
    if (minutes < 60) {
      return minutes + "min";
    } else {
      newHours = Math.trunc(minutes/60);
      newMinutes = minutes - newHours * 60;
    }
    return newMinutes != 0 ? newHours + 'h' + newMinutes : newHours + 'h' + newMinutes + '0';

  }
}

