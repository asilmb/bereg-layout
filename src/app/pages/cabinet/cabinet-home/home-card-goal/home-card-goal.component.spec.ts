import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardGoalComponent } from './home-card-goal.component';

describe('HomeCardGoalComponent', () => {
  let component: HomeCardGoalComponent;
  let fixture: ComponentFixture<HomeCardGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
