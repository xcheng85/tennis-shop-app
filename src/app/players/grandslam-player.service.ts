import { Injectable } from '@angular/core';
import { switchMap, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { PlayersService } from './players.service';

@Injectable({
  providedIn: 'root',
})
export class GrandslamPlayerService extends PlayersService {
  constructor(private h: HttpClient) {
    super(h);
  }

  override getPlayers(): Observable<Player[]> {
    return super.getPlayers().pipe(
      switchMap((players) => {
        const playerWithGrandslams = players.filter((p) => p.grandslams > 0);
        return of(playerWithGrandslams);
      })
    );
  }
}
