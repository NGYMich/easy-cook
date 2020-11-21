import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ListeRecettesComponent} from "./liste-recettes/liste-recettes.component";
import {LivreRecettesPageComponent} from "./livre-recettes-page/livre-recettes-page.component";
import {AjoutModificationRecettePageComponent} from "./ajout-modification-recette-page/ajout-modification-recette-page.component";
import {RecetteAleatoirePageComponent} from "./recette-aleatoire-page/recette-aleatoire-page.component";
import {TestPageComponent} from "./test-page/test-page.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'livre-recettes', component: LivreRecettesPageComponent},
  { path: 'liste-recettes', component: ListeRecettesComponent},
  { path: 'ajout-modification-recette', component: AjoutModificationRecettePageComponent},
  { path: 'recette-aleatoire', component: RecetteAleatoirePageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'test', component: TestPageComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
