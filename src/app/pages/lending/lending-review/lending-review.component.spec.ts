import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReviewComponent } from './lending-review.component';

describe('LendingReviewComponent', () => {
  let component: LendingReviewComponent;
  let fixture: ComponentFixture<LendingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
