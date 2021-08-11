import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingPriceComponent } from './lending-price.component';

describe('LendingPriceComponent', () => {
  let component: LendingPriceComponent;
  let fixture: ComponentFixture<LendingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
