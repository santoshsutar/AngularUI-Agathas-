import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketSummaryViewComponent } from './basket-summary-view.component';

describe('BasketSummaryViewComponent', () => {
  let component: BasketSummaryViewComponent;
  let fixture: ComponentFixture<BasketSummaryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketSummaryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSummaryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
