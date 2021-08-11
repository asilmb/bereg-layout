import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardDietComponent } from './home-card-diet.component';

describe('HomeCardDietComponent', () => {
  let component: HomeCardDietComponent;
  let fixture: ComponentFixture<HomeCardDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
