import { TestBed } from '@angular/core/testing';

import { GrandslamPlayerService } from './grandslam-player.service';

describe('GrandslamPlayerService', () => {
  let service: GrandslamPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandslamPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
