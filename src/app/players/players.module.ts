import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SortPlayerByCountryPipe } from './sort-player-by-country.pipe';
import { PlayerHostDirective } from './player-host.directive';
import { GrandslamsComponent } from './grandslams/grandslams.component';
import { PlayerViewComponent } from './player-view/player-view.component';

@NgModule({
  declarations: [PlayerListComponent, PlayerDetailComponent, SortPlayerByCountryPipe, PlayerHostDirective, GrandslamsComponent, PlayerViewComponent],
  imports: [CommonModule],
  exports: [PlayerListComponent],
})
export class PlayersModule {}
