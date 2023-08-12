import { TestBed } from '@angular/core/testing';

import { UserAnalyticService } from './user-analytic.service';

describe('UserAnalyticService', () => {
  let service: UserAnalyticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAnalyticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
