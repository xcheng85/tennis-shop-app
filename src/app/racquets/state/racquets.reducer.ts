import { createFeature, createReducer, on } from '@ngrx/store';
import { RacquetsApiActions } from './racquets.actions';
import { Racquet } from '../racquet';

interface State {
  racquets: ReadonlyArray<Racquet>;
}

const initialState: State = {
  racquets: [],
};

export const racquetFeatureKey = 'racquet';
export const racquetsFeature = createFeature({
  name: racquetFeatureKey,
  reducer: createReducer(
    initialState,
    on(RacquetsApiActions.retrievedRacquetList, (state, { racquets }) => ({
      ...state,
      racquets,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectRacquetState, // feature selector
  selectRacquets, // selector for `racquets` property
} = racquetsFeature;
