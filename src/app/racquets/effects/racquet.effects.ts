import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { RacquetsApiActions } from '../state/racquets.actions';
import { RacquetsService } from '../racquets.service';

@Injectable()
export class RacquetEffects {
  retrieveRacquetList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RacquetsApiActions.retrievingRacquetList),
      exhaustMap(() =>
        this.racquetsService.getRacquets().pipe(
          map((racquets) =>
            RacquetsApiActions.retrievedRacquetList({ racquets })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private racquetsService: RacquetsService
  ) {}
}
