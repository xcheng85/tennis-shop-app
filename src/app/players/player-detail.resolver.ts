import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Player } from './player';
import { PlayersService } from './players.service';

// inject in method
export const playerDetailResolver: ResolveFn<Player> = (
  route: ActivatedRouteSnapshot
) => {
  const playersService = inject(PlayersService);
  const pid = String(route.paramMap.get('id'));
  // async return observable
  return playersService.getPlayer(pid);
};
