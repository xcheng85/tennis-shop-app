import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

// order for less specific
const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent,
    // children: [
    //   // better approach to solve list and detail 
    //   {
    //     path: ':id',
    //     component: PlayerDetailComponent,
    //   },
    // ],
  },
  {
    path: 'players/:id',
    component: PlayerDetailComponent,
  },
  {
    path: '',
    redirectTo: '/players',
    pathMatch: 'full',
  },
];

// for child: routes in a feature module
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
