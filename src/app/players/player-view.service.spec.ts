import { TestBed } from '@angular/core/testing';

import { PlayerViewService } from './player-view.service';

describe('PlayerViewService', () => {
  let service: PlayerViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
