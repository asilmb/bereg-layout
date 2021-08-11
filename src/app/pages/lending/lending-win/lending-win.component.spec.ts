import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingWinComponent } from './lending-win.component';

describe('LendingWinComponent', () => {
  let component: LendingWinComponent;
  let fixture: ComponentFixture<LendingWinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingWinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
