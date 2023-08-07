import { Injectable } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class GrandslamPlayerService extends PlayersService {
  constructor() {
    super();
  }

  override getPlayers(): Player[] {
    return super.getPlayers().filter((p) => p.grandslams > 0);
  }
}
