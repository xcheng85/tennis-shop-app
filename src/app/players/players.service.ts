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
      },
      {
        name: 'Rafa Nadal',
        country: 'Spain',
      },
      {
        name: 'Novak Djorkvic',
        country: 'Serbian',
      },
      {
        name: 'ZhiZheng Zhang',
        country: 'China',
      },
    ];
  }
}
