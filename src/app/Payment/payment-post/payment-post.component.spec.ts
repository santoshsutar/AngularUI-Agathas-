import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPostComponent } from './payment-post.component';

describe('PaymentPostComponent', () => {
  let component: PaymentPostComponent;
  let fixture: ComponentFixture<PaymentPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
