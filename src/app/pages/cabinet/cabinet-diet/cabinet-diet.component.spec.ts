import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetDietComponent } from './cabinet-diet.component';

describe('CabinetDietComponent', () => {
  let component: CabinetDietComponent;
  let fixture: ComponentFixture<CabinetDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
