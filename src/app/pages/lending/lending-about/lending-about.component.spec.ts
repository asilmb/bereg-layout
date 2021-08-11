import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingAboutComponent } from './lending-about.component';

describe('LendingAboutComponent', () => {
  let component: LendingAboutComponent;
  let fixture: ComponentFixture<LendingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
