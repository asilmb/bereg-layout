import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPaymentComponent } from './setting-payment.component';

describe('SettingPaymentComponent', () => {
  let component: SettingPaymentComponent;
  let fixture: ComponentFixture<SettingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
