import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { SortPlayerByCountryPipe } from './sort-player-by-country.pipe';
import { PlayerHostDirective } from './player-host.directive';
import { GrandslamsComponent } from './grandslams/grandslams.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayersRoutingModule } from './players-routing.module';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { CreatePlayerV2Component } from './create-player-v2/create-player-v2.component';

@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerDetailComponent,
    SortPlayerByCountryPipe,
    PlayerHostDirective,
    GrandslamsComponent,
    PlayerViewComponent,
    CreatePlayerComponent,
    CreatePlayerV2Component,
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [PlayerListComponent],
})
export class PlayersModule {}
