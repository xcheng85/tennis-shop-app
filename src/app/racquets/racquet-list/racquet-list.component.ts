import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectRacquets } from '../state/racquets.selector';
import { RacquetsApiActions } from '../state/racquets.actions';
import { RacquetsService } from '../racquets.service';

@Component({
  selector: 'app-racquet-list',
  templateUrl: './racquet-list.component.html',
  styleUrls: ['./racquet-list.component.css'],
})
export class RacquetListComponent implements OnInit {
  racquets$ = this.store.select(selectRacquets);
  // to be refactored by effects
  constructor(private racquetsService: RacquetsService, private store: Store) {}

  ngOnInit(): void {
    this.racquetsService
      .getRacquets()
      .subscribe((racquets) =>
        this.store.dispatch(
          RacquetsApiActions.retrievedRacquetList({ racquets })
        )
      );
  }
}
