import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PlayersModule } from '../players/players.module';
import { RacquetsRoutingModule } from './racquets-routing.module';
import { racquetsFeature } from './state/racquets.reducer';
import { RacquetListComponent } from './racquet-list/racquet-list.component';
import { RacquetEffects } from './effects/racquet.effects';
import { RacquetDetailComponent } from './racquet-detail/racquet-detail.component';
import {
  getRouterSelectors,
  RouterReducerState,
  routerReducer,
} from '@ngrx/router-store';
@NgModule({
  declarations: [RacquetListComponent, RacquetDetailComponent],
  imports: [
    CommonModule,
    RacquetsRoutingModule,
    PlayersModule,
    StoreModule.forFeature(racquetsFeature),
    StoreModule.forFeature('router', routerReducer),
    EffectsModule.forFeature(RacquetEffects),
  ],
  exports: [RacquetsRoutingModule],
})
export class RacquetsModule {}
