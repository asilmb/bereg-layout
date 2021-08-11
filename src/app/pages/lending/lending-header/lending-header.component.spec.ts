import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingHeaderComponent } from './lending-header.component';

describe('LendingHeaderComponent', () => {
  let component: LendingHeaderComponent;
  let fixture: ComponentFixture<LendingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
