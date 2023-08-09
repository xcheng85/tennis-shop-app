import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportInfoComponent } from './support-info/support-info.component';

const routes: Routes = [
  {
    path: '',
    component: SupportInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
