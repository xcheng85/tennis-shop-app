import { Injectable } from '@angular/core';
import { Observable, fromEvent, debounceTime } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { createEffect } from '@ngrx/effects';
 
import { UserAnalyticService } from '../user-analytic.service';
 
@Injectable()
export class UserActivityEffects {
  trackUserActivity$ = createEffect(() =>
    fromEvent(document, 'click').pipe(
      concatMap(event => this.userAnalyticService.trackUserActivity(event)),
    ), { dispatch: false }
  );
 
  resize$ = createEffect(() =>
    fromEvent(window, 'resize').pipe(
        debounceTime(300),
      concatMap(event => this.userAnalyticService.trackUserActivity(event)),
    ), { dispatch: false }
  );

  constructor(
    private userAnalyticService: UserAnalyticService,
  ) {}
}
