import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListeRecettesComponent} from './liste-recettes/liste-recettes.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from "@angular/material/select";
import {AjoutModificationRecettePageComponent} from './ajout-modification-recette-page/ajout-modification-recette-page.component';
import {RecetteAleatoirePageComponent} from './recette-aleatoire-page/recette-aleatoire-page.component';
import {LivreRecettesPageComponent} from './livre-recettes-page/livre-recettes-page.component';
import {MatIconModule} from "@angular/material/icon";
import {NgxGalleryModule} from "ngx-gallery-9";
import {TestPageComponent} from './test-page/test-page.component';
import {MatSortModule} from "@angular/material/sort";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListeRecettesComponent,
    AjoutModificationRecettePageComponent,
    RecetteAleatoirePageComponent,
    LivreRecettesPageComponent,
    TestPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,
    NgxGalleryModule,
    MatSortModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
