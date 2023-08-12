import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Racquet } from '../racquet';
import { racquetFeatureKey, racquetsFeature } from '../state/racquets.reducer';
// for slice of state
// export const selectRacquets =
//   createFeatureSelector<ReadonlyArray<Racquet>>(racquetFeatureKey);

export const selectRacquets = createSelector(
  racquetsFeature.selectRacquets,
  racquetsFeature.selectRacquets,
  (r1, r2) => r1
);
