import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingAdaptiveComponent } from './lending-adaptive.component';

describe('LendingAdaptiveComponent', () => {
  let component: LendingAdaptiveComponent;
  let fixture: ComponentFixture<LendingAdaptiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingAdaptiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingAdaptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
