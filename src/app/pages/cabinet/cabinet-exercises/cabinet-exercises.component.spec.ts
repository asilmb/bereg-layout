import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetExercisesComponent } from './cabinet-exercises.component';

describe('CabinetExercisesComponent', () => {
  let component: CabinetExercisesComponent;
  let fixture: ComponentFixture<CabinetExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
