import { Injectable } from '@angular/core';
import { Player } from './player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class GrandslamPlayerV1Service extends PlayersService {
  constructor() {
    super();
  }

  override getPlayers(): Player[] {
    console.log(`V1`);
    return super.getPlayers().filter((p) => p.grandslams === 0);
  }
}
