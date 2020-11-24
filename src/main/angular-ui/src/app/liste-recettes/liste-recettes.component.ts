import {Component, OnInit, ViewChild} from '@angular/core';
import {RecetteService} from "../services/RecetteService";
import {Recette} from "../model/recette";
import {MatTableDataSource} from "@angular/material/table";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from "@angular/material/sort";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.component.html',
  styleUrls: ['./liste-recettes.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListeRecettesComponent implements OnInit {
  displayedColumns: string[] = ['categorie', 'auteur', 'nom', 'temps_preparation', 'temps_cuisson', 'temps_total', 'note'];
  newData;
  dataSource;
  expandedElement: Recette | null;
  hasDataLoaded = false;

  constructor(private recetteService: RecetteService) { }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(data => {
      console.log(data);
      // @ts-ignore
      this.newData = data;
      this.newData.forEach(recette => {
        recette.temps_total = this.minToHours(Number(recette.temps_preparation) + Number(recette.temps_cuisson));
        recette.temps_cuisson = this.minToHours(Number(recette.temps_cuisson));
        recette.temps_preparation = this.minToHours(Number(recette.temps_preparation));
      })
      this.dataSource = new MatTableDataSource(this.newData);
      this.hasDataLoaded = true;
      //this.dataSource.sort = this.sort;
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
