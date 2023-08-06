import { Injectable } from '@angular/core';
import { Player } from './player';

// root injector will provide the instance of this service, singleton

@Injectable({
  providedIn: 'root', 
})
export class PlayersService {
  constructor() {}
  // to be replaced with server api
  getPlayers(): Player[] {
    return [
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
  }
}
