import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Racquet } from '../racquet';

export const RacquetsApiActions = createActionGroup({
  source: 'Racquets API',
  events: {
    // defining an event without payload using the `emptyProps` function
    'Retrieving Racquet List': props<{ brand: string | undefined }>(),
    // after service is called
    'Retrieved Racquet List': props<{ racquets: ReadonlyArray<Racquet> }>(),
  },
});
