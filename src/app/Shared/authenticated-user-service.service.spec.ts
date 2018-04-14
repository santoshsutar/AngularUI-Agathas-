import { TestBed, inject } from '@angular/core/testing';

import { AuthenticatedUserServiceService } from './authenticated-user-service.service';

describe('AuthenticatedUserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedUserServiceService]
    });
  });

  it('should ...', inject([AuthenticatedUserServiceService], (service: AuthenticatedUserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
