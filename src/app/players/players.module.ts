import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SortPlayerByCountryPipe } from './sort-player-by-country.pipe';

@NgModule({
  declarations: [PlayerListComponent, PlayerDetailComponent, SortPlayerByCountryPipe],
  imports: [CommonModule],
  exports: [PlayerListComponent],
})
export class PlayersModule {}
