import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recette} from "../model/recette";
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private http: HttpClient) {
  }

  rootURL = '/api';

  getRecettes() {
    return this.http.get(this.rootURL + '/recettes');
  }

  addRecette(recette: Recette) {
    const body = JSON.stringify(recette);
    const headers = {'content-type': 'application/json'}


    return this.http.post<Recette>(this.rootURL + '/recette', body, {'headers': headers}).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );


    //console.log(body);
 /*   return this.http.post<Recette>(this.rootURL + '/recette', "{\n" +
      "    \"categorie\": null,\n" +
      "    \"auteur\": null,\n" +
      "    \"nom\": \"Spaghetti dsqdsqdsqdqs\",\n" +
      "    \"description\": null,\n" +
      "    \"lien_image\": null,\n" +
      "    \"lien_video\": null,\n" +
      "    \"temps_preparation\": null,\n" +
      "    \"temps_cuisson\": null,\n" +
      "    \"temps_total\": null,\n" +
      "    \"note\": null,\n" +
      "    \"liste_ingredients\": [],\n" +
      "    \"liste_etapes\": []\n" +
      "}", {'headers': headers}).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );*/


    //return this.http.post<Recette>(this.rootURL + '/recette', body,{'headers':headers}).pipe();
    //return this.http.post(this.rootURL + '/recette', recette);
  }

}
