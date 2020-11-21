import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecettesComponent } from './liste-recettes.component';

describe('ListeRecettesComponent', () => {
  let component: ListeRecettesComponent;
  let fixture: ComponentFixture<ListeRecettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
