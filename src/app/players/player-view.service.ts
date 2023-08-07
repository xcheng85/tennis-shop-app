import { Injectable } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './player';

@Injectable()
export class PlayerViewService {
  private playerCache: Player | undefined;
  // service in service pattern
  constructor(private playersService: PlayersService) {}

  getPlayer(id: number): Player | undefined {
    const players = this.playersService.getPlayers();
    if (!this.playerCache) {
      this.playerCache = players[id];
    }
    return this.playerCache;
  }
}
