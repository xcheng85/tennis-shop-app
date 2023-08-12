import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacquetListComponent } from './racquet-list/racquet-list.component';

const routes: Routes = [
  {
    path: '',
    component: RacquetListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RacquetsRoutingModule {}
