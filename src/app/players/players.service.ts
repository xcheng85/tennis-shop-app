import { Injectable } from '@angular/core';
import { Observable, of, filter, switchMap, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

// transform from response to entity Player
interface PlayerDTO {
  firstname: string;
  lastname: string;
  country: string;
  aus: number;
  fra: number;
  wmb: number;
  us: number;
}

// root injector will provide the instance of this service, singleton
@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private players: Player[] = [
    {
      id: '0',
      name: 'Roger Federer',
      country: 'Swiss',
      grandslams: 20,
    },
    {
      id: '1',
      name: 'Rafa Nadal',
      country: 'Spain',
      grandslams: 22,
    },
    {
      id: '2',
      name: 'Novak Djorkvic',
      country: 'Serbian',
      grandslams: 23,
    },
    {
      id: '3',
      name: 'ZhiZheng Zhang',
      country: 'China',
      grandslams: 0,
    },
  ];
  constructor(private http: HttpClient) {}
  // to be replaced with server api
  // to be observables with of operator
  getPlayers(): Observable<Player[]> {
    return of(this.players);
  }

  getPlayer(id: string): Observable<Player> {
    return from(this.players).pipe(filter((p) => p.id === id));
  }
}
