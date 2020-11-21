import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModificationRecettePageComponent } from './ajout-modification-recette-page.component';

describe('AjoutModificationRecettePageComponent', () => {
  let component: AjoutModificationRecettePageComponent;
  let fixture: ComponentFixture<AjoutModificationRecettePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModificationRecettePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModificationRecettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
