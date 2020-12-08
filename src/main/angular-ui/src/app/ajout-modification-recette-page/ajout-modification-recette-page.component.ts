import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Recette} from "../model/recette";
import {RecetteService} from "../services/RecetteService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-ajout-modification-recette-page',
  templateUrl: './ajout-modification-recette-page.component.html',
  styleUrls: ['./ajout-modification-recette-page.component.css']
})
export class AjoutModificationRecettePageComponent implements OnInit {

  addRecipeFormIsShown = false;
  modifyRecipeFormIsShown = false;
  deleteRecipeFormIsShown = true;
  isRecetteEnregistree = false;
  isRecetteSupprimee = false;
  isSelectedRecette = false;
  isRecetteModifiee = false;

  informationsForm: FormGroup;
  ingredientForm: FormGroup;
  etapeForm: FormGroup;

  modifyInformationsForm: FormGroup;
  modifyIngredientForm: FormGroup;
  modifyEtapeForm: FormGroup;


  selectedCategory;
  selectedRecetteToDelete;
  selectedRecetteToModify = {
    recetteId: "",
    categorie: "",
    auteur: "",
    nom: "",
    description: "",
    lien_image: "",
    lien_vieo: "",
    temps_preparation: "",
    temps_cuisson: "",
    temps_total: "",
    note: "",
    liste_ingredients: [],
    liste_etapes: []
  };
  //selectedRecetteToModify = new Recette();
  categories = ['Entrée', 'Plat', 'Dessert', 'Autres'];
  listeRecettes;
  deleteOperationSuccessfulSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private recetteService: RecetteService) {
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

  get modifyInformations() {
    return this.modifyInformationsForm.get('nom') as FormArray;
  }

  get modifyIngredients() {
    return this.modifyIngredientForm.get('modifyIngredients') as FormArray;
  }

  get modifyEtapes() {
    return this.modifyEtapeForm.get('modifyEtapes') as FormArray;
  }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      ingredients: this.formBuilder.array([])
    });
    this.etapeForm = this.formBuilder.group({
      etapes: this.formBuilder.array([])
    });
    this.informationsForm = this.formBuilder.group({
      nom: new FormControl(''),
      auteur: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
      lien_image: new FormControl(''),
      lien_video: new FormControl(''),
      temps_preparation: new FormControl(''),
      temps_cuisson: new FormControl(''),
      note: new FormControl(''),
    });

    this.modifyIngredientForm = this.formBuilder.group({
      modifyIngredients: this.formBuilder.array([])
    });


    this.modifyEtapeForm = this.formBuilder.group({
      modifyEtapes: this.formBuilder.array([])
    });
    this.modifyInformationsForm = this.formBuilder.group({
      nom: new FormControl(''),
      auteur: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
      lien_image: new FormControl(''),
      lien_video: new FormControl(''),
      temps_preparation: new FormControl(''),
      temps_cuisson: new FormControl(''),
      note: new FormControl(''),
    });
    this.getListeRecettes();
    this.deleteOperationSuccessfulSubscription = this.recetteService.deleteOperationSuccessfulEvent$.subscribe();


  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.group({nom: '', quantite: ''}));
  }

  addModifyIngredient() {
    this.modifyIngredients.push(this.formBuilder.group({nom: '', quantite: ''}));
  }

  addEtape() {
    this.etapes.push(this.formBuilder.group({nom_etape: ''}));
  }

  addModifyEtape() {
    this.modifyEtapes.push(this.formBuilder.group({nom_etape: ''}));
  }

  deleteIngredient(index) {
    this.ingredients.removeAt(index);
  }

  deleteModifyIngredient(index) {
    this.modifyIngredients.removeAt(index);
  }


  deleteEtape(index) {
    this.etapes.removeAt(index);
  }

  deleteModifyEtape(index) {
    this.modifyEtapes.removeAt(index);
  }

  showAddRecetteDiv() {
    this.modifyRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = false;
    this.addRecipeFormIsShown = !this.addRecipeFormIsShown;
    this.hideAllDivWhenAddModifyOrDelete();
  }

  hideAllDivWhenAddModifyOrDelete() {
    this.isRecetteEnregistree = false;
    this.isRecetteSupprimee = false;
    this.isSelectedRecette = false;
    this.isRecetteModifiee = false;
  }
  showModifyRecetteDiv() {
    this.addRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = false;
    this.modifyRecipeFormIsShown = !this.modifyRecipeFormIsShown;
    this.hideAllDivWhenAddModifyOrDelete();
    this.getListeRecettes();
  }

  showDeleteRecetteDiv() {
    this.addRecipeFormIsShown = false;
    this.modifyRecipeFormIsShown = false;
    this.deleteRecipeFormIsShown = !this.deleteRecipeFormIsShown;
    this.hideAllDivWhenAddModifyOrDelete();
    this.getListeRecettes();
  }

  addRecette() {
    var etapesArray = this.etapes.value.map(a => a.nom_etape);
    var ingredientsArray = null;
    var newNote = this.informationsForm.get('note').value == "" ? "" : this.informationsForm.get('note').value + "/10";
    console.log(this.informationsForm.get('note').value);
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
      note: newNote,
      liste_ingredients: this.ingredients.value,
      liste_etapes: etapesArray
    };
    this.recetteService.addRecette(recette);
    this.isRecetteEnregistree = true;
    this.getListeRecettes();
  }

  modifierRecette() {
    // console.log('recette à modifier : ' + this.selectedRecetteToModify);
    var modifiedEtapesArray = this.modifyEtapes.value.map(a => a.nom_etape);
    var newNote = this.modifyInformationsForm.get('note').value == "" ? "" : this.modifyInformationsForm.get('note').value + "/10";
    //console.log(this.modifyIngredients.value);
    const modifiedRecette: Recette = {
      recetteId: this.selectedRecetteToModify.recetteId,
      categorie: this.modifyInformationsForm.get('categorie').value,
      auteur: this.modifyInformationsForm.get('auteur').value,
      nom: this.modifyInformationsForm.get('nom').value,
      description: this.modifyInformationsForm.get('description').value,
      lien_image: this.modifyInformationsForm.get('lien_image').value,
      lien_video: this.modifyInformationsForm.get('lien_video').value,
      temps_preparation: this.modifyInformationsForm.get('temps_preparation').value,
      temps_cuisson: this.modifyInformationsForm.get('temps_cuisson').value,
      temps_total: null,
      note: newNote,
      liste_ingredients: this.modifyIngredients.value,
      liste_etapes: modifiedEtapesArray
    };
    // console.log("recette modifiée : " + modifiedRecette.liste_ingredients[0].nom);
    this.recetteService.addRecette(modifiedRecette);
    this.isRecetteModifiee = true;
    this.getListeRecettes();
  }

  changeRecetteAffichee(nomRecette) {
    this.isSelectedRecette = true;
    // modifier les ingrédients
    this.modifyIngredients.clear();
    for (var i = 0; i < this.selectedRecetteToModify.liste_ingredients.length; i++) {
      this.modifyIngredients.push(this.formBuilder.group({
        nom: this.selectedRecetteToModify.liste_ingredients[i].nom,
        quantite: this.selectedRecetteToModify.liste_ingredients[i].quantite
      }));
    }
    // modifier les étapes
    this.modifyEtapes.clear();
    for (var i = 0; i < this.selectedRecetteToModify.liste_etapes.length; i++) {
      this.modifyEtapes.push(this.formBuilder.group({nom_etape: this.selectedRecetteToModify.liste_etapes[i]}));
    }

  }

  deleteRecette() {
    this.recetteService.deleteRecette(this.selectedRecetteToDelete);

    this.deleteOperationSuccessfulSubscription = this.recetteService.deleteOperationSuccessfulEvent$
      .subscribe(isSuccessful => {
        if (isSuccessful === true) {
          this.getListeRecettes();
          this.isRecetteSupprimee = true;
          this.selectedRecetteToDelete = null;
        } else {
          console.log('epic fail');
        }
      });

  }

  async getListeRecettes() {
    this.recetteService.getRecettes().subscribe(data => {
      this.listeRecettes = data;
      //console.log(this.listeRecettes);
/*      this.listeRecettes.forEach(recette => {
        recette.temps_total = this.minToHours(Number(recette.temps_preparation) + Number(recette.temps_cuisson));
        recette.temps_cuisson = this.minToHours(Number(recette.temps_cuisson));
        recette.temps_preparation = this.minToHours(Number(recette.temps_preparation));
      })*/
    })
  }


  minToHours(minutes: number) {
    var newMinutes, newHours, newTime;
    if (minutes < 60) {
      return minutes + "min";
    } else {
      newHours = Math.trunc(minutes / 60);
      newMinutes = minutes - newHours * 60;
    }
    return newMinutes != 0 ? newHours + 'h' + newMinutes : newHours + 'h' + newMinutes + '0';

  }
}

