import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'players',
    component: PlayerListComponent,
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./support/support.module').then((m) => m.SupportModule),
      canMatch: [authGuard]
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
