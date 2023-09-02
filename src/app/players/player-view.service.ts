import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { PlayersService } from './players.service';
import { Player } from './player';

@Injectable()
export class PlayerViewService {
  private playerCache: Player | undefined;
  // service in service pattern
  constructor(private playersService: PlayersService) {}

  getPlayer(id: number): Observable<Player> {
    return this.playersService.getPlayers().pipe(
      switchMap((players) => {
        if (!this.playerCache) {
          this.playerCache = players[id];
        }
        return of(this.playerCache);
      })
    );
  }

  
}
