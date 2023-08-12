import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PlayersModule } from '../players/players.module';
import { racquetsFeature } from './state/racquets.reducer';
import { RacquetListComponent } from './racquet-list/racquet-list.component';

@NgModule({
  declarations: [
    RacquetListComponent
  ],
  imports: [
    CommonModule,
    PlayersModule,
    StoreModule.forFeature(racquetsFeature),
  ],
})
export class RacquetsModule {}
