import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingFooterComponent } from './lending-footer.component';

describe('LendingFooterComponent', () => {
  let component: LendingFooterComponent;
  let fixture: ComponentFixture<LendingFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
