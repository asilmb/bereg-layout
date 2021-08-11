import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardExercisesComponent } from './home-card-exercises.component';

describe('HomeCardExercisesComponent', () => {
  let component: HomeCardExercisesComponent;
  let fixture: ComponentFixture<HomeCardExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
