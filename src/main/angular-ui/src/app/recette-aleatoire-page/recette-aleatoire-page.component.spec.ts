import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteAleatoirePageComponent } from './recette-aleatoire-page.component';

describe('RecetteAleatoirePageComponent', () => {
  let component: RecetteAleatoirePageComponent;
  let fixture: ComponentFixture<RecetteAleatoirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteAleatoirePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteAleatoirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
