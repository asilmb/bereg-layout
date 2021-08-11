import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetTournamentComponent } from './cabinet-tournament.component';

describe('CabinetTournamentComponent', () => {
  let component: CabinetTournamentComponent;
  let fixture: ComponentFixture<CabinetTournamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetTournamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
