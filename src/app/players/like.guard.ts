import { CanDeactivateFn } from '@angular/router';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

export const likePlayerGuard: CanDeactivateFn<PlayerDetailComponent> = () => {
  const confirmation = confirm('You have viewed the player profile. Do you want to like it?');
  return confirmation;
};
