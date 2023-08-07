import { Injectable } from '@angular/core';
import { switchMap, of, Observable } from 'rxjs';
import { Player } from './player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class GrandslamPlayerV1Service extends PlayersService {
  constructor() {
    super();
  }

  override getPlayers(): Observable<Player[]> {
    return super.getPlayers().pipe(
      switchMap((players) => {
        const playerWithGrandslams = players.filter((p) => p.grandslams === 0);
        return of(playerWithGrandslams);
      })
    );
  }
}
