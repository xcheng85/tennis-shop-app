import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';

// root injector will provide the instance of this service, singleton

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private players: Player[] = [
    {
      name: 'Roger Federer',
      country: 'Swiss',
      grandslams: 20,
    },
    {
      name: 'Rafa Nadal',
      country: 'Spain',
      grandslams: 22,
    },
    {
      name: 'Novak Djorkvic',
      country: 'Serbian',
      grandslams: 23,
    },
    {
      name: 'ZhiZheng Zhang',
      country: 'China',
      grandslams: 0,
    },
  ];
  constructor() {}
  // to be replaced with server api
  // to be observables with of operator
  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }
}
