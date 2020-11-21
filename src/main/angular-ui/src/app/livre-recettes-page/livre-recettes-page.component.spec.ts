import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreRecettesPageComponent } from './livre-recettes-page.component';

describe('LivreRecettesPageComponent', () => {
  let component: LivreRecettesPageComponent;
  let fixture: ComponentFixture<LivreRecettesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreRecettesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreRecettesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
