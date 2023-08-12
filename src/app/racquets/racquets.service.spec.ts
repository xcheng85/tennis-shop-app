import { TestBed } from '@angular/core/testing';

import { RacquetsService } from './racquets.service';

describe('RacquetsService', () => {
  let service: RacquetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacquetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
