import { createActionGroup, props } from '@ngrx/store';
import { Racquet } from '../racquet';

export const RacquetsApiActions = createActionGroup({
  source: 'Racquets API',
  events: {
    // after service is called
    'Retrieved Racquet List': props<{ racquets: ReadonlyArray<Racquet> }>(),
  },
});
