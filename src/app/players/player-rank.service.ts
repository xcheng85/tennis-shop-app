import { Injectable, signal } from '@angular/core';
import * as _ from 'lodash';
import { Observable, of, switchMap, interval } from 'rxjs';

@Injectable()
export class PlayerRankService {
  public x = signal(0);
  constructor() {
    // every 5 seconds
    const source = interval(5000);
    //output: 0,1,2,3,4,5....
    const subscribe = source.subscribe(() => {
      this.x.set(_.random(1, 200));
    });
  }
}
