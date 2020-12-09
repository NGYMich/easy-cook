export class Recette {
  recetteId: string;
  nb_personnes: number;
  categorie: string;
  auteur: string;
  nom: string;
  description: string;
  lien_image: string;
  lien_video: string;
  temps_preparation: string;
  temps_cuisson: string;
  temps_total: string;
  note: string;
  liste_ingredients: [];
  liste_etapes: [];
}
