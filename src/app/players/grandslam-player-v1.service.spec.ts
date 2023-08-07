import { TestBed } from '@angular/core/testing';

import { GrandslamPlayerV1Service } from './grandslam-player-v1.service';

describe('GrandslamPlayerV1Service', () => {
  let service: GrandslamPlayerV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandslamPlayerV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
