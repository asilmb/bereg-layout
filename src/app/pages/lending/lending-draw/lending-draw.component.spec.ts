import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingDrawComponent } from './lending-draw.component';

describe('LendingDrawComponent', () => {
  let component: LendingDrawComponent;
  let fixture: ComponentFixture<LendingDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
