import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recette} from "../model/recette";
import {HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from "rxjs";

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

  rootURL = 'https://easy-cook-back.herokuapp.com/api';
  // rootURL = 'http://localhost:8080/api';
  private _deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject();

  getRecettes() {
    console.log(this.rootURL + '/recettes');
    return this.http.get(this.rootURL + '/recettes');
  }

  addRecette(recette: Recette) {
    const body = JSON.stringify(recette);
    const headers = {'content-type': 'application/json'};


    return this.http.post<Recette>(this.rootURL + '/recette', body, {'headers': headers}).subscribe(
      data => console.log('added recette', data),
      error => console.log('oops', error)
    );
  }

  deleteRecette(recette: Recette) {
    return this.http.delete(this.rootURL + '/recette/' + recette.recetteId).subscribe(data => {
      console.log(data);
      this._deleteOperationSuccessfulEvent$.next(true);
    });
  }

  get deleteOperationSuccessfulEvent$(): Observable<boolean> {
    return this._deleteOperationSuccessfulEvent$.asObservable();
  }

}
