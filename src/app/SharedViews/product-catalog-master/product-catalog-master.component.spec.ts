import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatalogMasterComponent } from './product-catalog-master.component';

describe('ProductCatalogMasterComponent', () => {
  let component: ProductCatalogMasterComponent;
  let fixture: ComponentFixture<ProductCatalogMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCatalogMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
