import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountMasterComponent } from './customer-account-master.component';

describe('CustomerAccountMasterComponent', () => {
  let component: CustomerAccountMasterComponent;
  let fixture: ComponentFixture<CustomerAccountMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
