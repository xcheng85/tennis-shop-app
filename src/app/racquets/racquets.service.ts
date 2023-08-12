import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, filter, switchMap, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Racquet } from './racquet';

@Injectable({
  providedIn: 'root',
})
export class RacquetsService {
  private racquets: Racquet[] = [
    {
      id: '0',
      name: 'Wilson Pro Staff RF97 v13',
      brand: 'Wilson',
      headSize: 97,
      swingWeight: 333,
      stiffness: 68,
    },
    {
      id: '1',
      name: 'Babolat Pure Aero Rafa Origin',
      brand: 'Babolat',
      headSize: 100,
      swingWeight: 371,
      stiffness: 70,
    },
  ];
  constructor(private http: HttpClient) {}

  getRacquets(): Observable<Racquet[]> {
    return of(this.racquets);
  }
}
