import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingBannerComponent } from './lending-banner.component';

describe('LendingBannerComponent', () => {
  let component: LendingBannerComponent;
  let fixture: ComponentFixture<LendingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
