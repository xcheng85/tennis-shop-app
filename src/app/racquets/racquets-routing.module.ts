import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacquetListComponent } from './racquet-list/racquet-list.component';
import { RacquetDetailComponent } from './racquet-detail/racquet-detail.component';

const routes: Routes = [
  {
    path: 'racquets',
    component: RacquetListComponent,
    // children: [
    //   // better approach to solve list and detail
    //   {
    //     path: ':id',
    //     component: RacquetDetailComponent,
    //   },
    // ],
  },
  {
    path: 'racquets/:id',
    component: RacquetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacquetsRoutingModule {}
