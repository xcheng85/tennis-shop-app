import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  // to use child router in the feature module: player
  // {
  //   path: 'players',
  //   component: PlayerListComponent,
  // },
  // lazy loading does not work for ngrx domain module
  // {
  //   path: 'racquets',
  //   loadChildren: () =>
  //     import('./racquets/racquets.module').then((m) => m.RacquetsModule),
  // },
  // {
  //   path: 'racquets',
  //   component: RacquetListComponent,
  // },
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
