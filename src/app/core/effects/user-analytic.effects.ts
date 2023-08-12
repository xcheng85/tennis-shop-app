import { Injectable } from '@angular/core';
import { Observable, fromEvent, debounceTime, interval } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';

import { UserAnalyticService } from '../user-analytic.service';

@Injectable()
export class UserActivityEffects {
  trackUserActivity$ = createEffect(
    () =>
      fromEvent(document, 'click').pipe(
        concatMap((event) => this.userAnalyticService.trackUserActivity('click'))
      ),
    { dispatch: false }
  );

  resize$ = createEffect(
    () =>
      fromEvent(window, 'resize').pipe(
        debounceTime(300),
        concatMap((event) => this.userAnalyticService.trackUserActivity('resize'))
      ),
    { dispatch: false }
  );

  polling$ = createEffect(
    () =>
      interval(2000).pipe(
        concatMap((event) => this.userAnalyticService.trackUserActivity('polling'))
      ),
    { dispatch: false }
  );

  constructor(private userAnalyticService: UserAnalyticService) {}
}
