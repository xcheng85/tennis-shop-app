import {initialState, reducer} from './racquets.reducer';
import { Action } from '@ngrx/store';
import { RacquetsApiActions } from './racquets.actions';

describe('Racquets Reducer', () => {
  const sampleRacquet = 
  it('should return initial state if the action is unknown', () => {
    const action: Action = { type: 'Unknown' };
    const state = reducer(initialState, action);
    expect(state).toBe(initialState);
  });

  describe('racquets loaded action', function () {
    it('should have 1 book in books after loading 1 book', () => {
      const action = RacquetsApiActions.retrievedRacquetList({ racquets: [] });
      const state = reducer(initialState, action);
      expect(state.racquets.length).toEqual(0);
    //   expect(state.books[0]).toBe(sampleBook);
    });
  });
});
