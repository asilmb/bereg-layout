import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetScheduleComponent } from './cabinet-schedule.component';

describe('CabinetScheduleComponent', () => {
  let component: CabinetScheduleComponent;
  let fixture: ComponentFixture<CabinetScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
