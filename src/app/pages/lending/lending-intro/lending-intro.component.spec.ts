import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingIntroComponent } from './lending-intro.component';

describe('LendingIntroComponent', () => {
  let component: LendingIntroComponent;
  let fixture: ComponentFixture<LendingIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
