import { TestBed, inject } from '@angular/core/testing';

import { CurrentBasketService } from './current-basket.service';

describe('CurrentBasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentBasketService]
    });
  });

  it('should ...', inject([CurrentBasketService], (service: CurrentBasketService) => {
    expect(service).toBeTruthy();
  }));
});
