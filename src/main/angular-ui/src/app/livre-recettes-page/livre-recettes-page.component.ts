import {Component, OnInit} from '@angular/core';
import {RecetteService} from "../services/RecetteService";
import {Recette} from "../model/recette";
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery-9';


@Component({
  selector: 'app-livre-recettes-page',
  templateUrl: './livre-recettes-page.component.html',
  styleUrls: ['./livre-recettes-page.component.css']
})
export class LivreRecettesPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  tabLienImages = [];
  tabNgxGalleryImages = [];
  dataSource;
  hasDataLoaded = false;

  constructor(private recetteService: RecetteService) {
  }

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(data => {
      this.dataSource = data;
      console.log(this.dataSource);
      this.tabLienImages = this.dataSource.map(({lien_image}) => lien_image);
      for (let i = 0; i < this.tabLienImages.length; i++) {
        this.tabNgxGalleryImages.push({
          small: this.tabLienImages[i],
          medium: this.tabLienImages[i],
          big: this.tabLienImages[i]
        })
      }
      this.galleryImages = this.tabNgxGalleryImages;
      this.hasDataLoaded = true;
    })

    //this.galleryImages = this.dataSource.lien_image;


    this.galleryOptions = [
      {
        imageSize: 'contain',
        fullWidth: true,
        breakpoint: 5000
      },
      {
        width: '100%',
        height: '820px'
      }
    ];

  }

}
