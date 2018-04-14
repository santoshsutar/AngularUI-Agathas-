import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutAddDeliveryAddressComponent } from './checkout-add-delivery-address.component';

describe('CheckoutAddDeliveryAddressComponent', () => {
  let component: CheckoutAddDeliveryAddressComponent;
  let fixture: ComponentFixture<CheckoutAddDeliveryAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutAddDeliveryAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutAddDeliveryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
