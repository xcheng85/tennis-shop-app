import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';
import { RacquetListComponent } from './racquets/racquet-list/racquet-list.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent,
  },
  // lazy loading does not work for ngrx domain module
  // {
  //   path: 'racquets',
  //   loadChildren: () =>
  //     import('./racquets/racquets.module').then((m) => m.RacquetsModule),
  // },
  {
    path: 'racquets',
    component: RacquetListComponent,
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./support/support.module').then((m) => m.SupportModule),
      canMatch: [authGuard],
  },
  {
    path: '**', // wild card route as the last entry
    component: PageNotFoundComponent,
    canActivate: [authGuard], // redirect if not logged in
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
