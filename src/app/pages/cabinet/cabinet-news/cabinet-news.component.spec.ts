import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetNewsComponent } from './cabinet-news.component';

describe('CabinetNewsComponent', () => {
  let component: CabinetNewsComponent;
  let fixture: ComponentFixture<CabinetNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
