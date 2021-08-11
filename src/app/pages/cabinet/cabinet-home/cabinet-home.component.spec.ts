import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetHomeComponent } from './cabinet-home.component';

describe('CabinetHomeComponent', () => {
  let component: CabinetHomeComponent;
  let fixture: ComponentFixture<CabinetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
