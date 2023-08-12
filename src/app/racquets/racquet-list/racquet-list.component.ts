import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRacquets } from '../state/racquets.selector';
import { RacquetsApiActions } from '../state/racquets.actions';

@Component({
  selector: 'app-racquet-list',
  templateUrl: './racquet-list.component.html',
  styleUrls: ['./racquet-list.component.css'],
})
export class RacquetListComponent implements OnInit {
  racquets$ = this.store.select(selectRacquets);
  // to be refactored by effects
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(RacquetsApiActions.retrievingRacquetList());
  }
}
