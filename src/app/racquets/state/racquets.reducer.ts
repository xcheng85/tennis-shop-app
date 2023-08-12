import { createReducer, on } from '@ngrx/store';
import { RacquetsApiActions } from './racquets.actions';
import { Racquet } from '../racquet';

export const racquetFeatureKey = 'racquet';

export const initialState: ReadonlyArray<Racquet> = [];

export const racquetsReducer = createReducer(
  initialState,
  on(
    RacquetsApiActions.retrievedRacquetList,
    (_state, { racquets }) => racquets
  )
);
