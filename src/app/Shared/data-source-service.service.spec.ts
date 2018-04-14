import { TestBed, inject } from '@angular/core/testing';

import { DataSourceServiceService } from './data-source-service.service';

describe('DataSourceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceServiceService]
    });
  });

  it('should ...', inject([DataSourceServiceService], (service: DataSourceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
