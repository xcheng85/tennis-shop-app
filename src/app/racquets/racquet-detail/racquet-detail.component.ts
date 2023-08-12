import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTitle, selectUrl, selectCurrentRoute, selectRouteParams } from '../state/router.selectors';
import { selectRacquet } from '../state/racquets.selector';

@Component({
  selector: 'app-racquet-detail',
  templateUrl: './racquet-detail.component.html',
  styleUrls: ['./racquet-detail.component.css'],
})
export class RacquetDetailComponent implements OnInit{
  racquet$ = this.store.select(selectRacquet);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectUrl).subscribe(t => {
      console.log(t);
    })
    this.store.select(selectRouteParams).subscribe(t => {
      console.log(t);
    })
    this.store.select(selectRacquet).subscribe(t => {
      console.log(t);
    })
  }
}
