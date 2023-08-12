import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Racquet } from '../racquet';
import { racquetFeatureKey } from '../state/racquets.reducer';

// for slice of state
export const selectRacquets =
  createFeatureSelector<ReadonlyArray<Racquet>>(racquetFeatureKey);
