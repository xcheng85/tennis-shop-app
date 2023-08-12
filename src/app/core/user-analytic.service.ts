import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAnalyticService {
  constructor() {}

  trackUserActivity(event: any) : Observable<undefined>{
    console.log(`[UserAnalyticService] trackUserActivity: ${event}`);
    return of(undefined);
  }
}
