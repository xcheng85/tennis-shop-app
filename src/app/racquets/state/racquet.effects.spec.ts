import { TestBed } from '@angular/core/testing';
import { RacquetEffects } from './racquet.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { initialState } from './racquets.reducer';
import { RacquetsService } from '../racquets.service';
import { Store } from '@ngrx/store';
import { RacquetsApiActions } from './racquets.actions';
import { HttpClientModule } from '@angular/common/http';

describe('Effects', () => {
  let actions$: Observable<any>;
  let effects: RacquetEffects;
  let store: Store;
  let racquetsService: RacquetsService;

  const racquets = [
    {
      id: '0',
      name: 'Wilson Pro Staff RF97 v13',
      brand: 'Wilson',
      headSize: 97,
      swingWeight: 333,
      stiffness: 68,
    },
    {
      id: '1',
      name: 'Babolat Pure Aero Rafa Origin',
      brand: 'Babolat',
      headSize: 100,
      swingWeight: 371,
      stiffness: 70,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RacquetEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
      ],
      imports: [HttpClientModule],
    });
    racquetsService = TestBed.inject(RacquetsService);
    effects = TestBed.inject(RacquetEffects);
    store = TestBed.inject(Store);
  });

  describe('retrieving racquets action', function () {
    it('should call getRacquets and redirect to retrieved racquets action', (done) => {
      spyOn(racquetsService, 'getRacquets').and.returnValue(of(racquets));
      actions$ = of(RacquetsApiActions.retrievingRacquetList);
      effects.retrieveRacquetList$.subscribe((res) => {
        expect(racquetsService.getRacquets).toHaveBeenCalled();
        expect(res).toEqual(RacquetsApiActions.retrievedRacquetList({ racquets }));
        done();
      });
    });
  });
});
