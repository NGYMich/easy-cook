import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  addRecette(recette: any, id: number) {
    recette.id = id;
    return this.http.post(this.rootURL + '/recette', recette);
  }

}
