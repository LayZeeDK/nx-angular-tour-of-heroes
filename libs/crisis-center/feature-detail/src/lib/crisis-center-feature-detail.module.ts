import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisDetailModule } from './crisis-detail/crisis-detail.module';

const routes: Routes = [
  {
    path: '',
    component: CrisisDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CrisisDetailModule],
})
export class CrisisCenterFeatureDetailModule {}
