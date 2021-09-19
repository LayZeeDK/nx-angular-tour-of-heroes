import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterFeatureListModule, CrisisListComponent } from '@tour-of-heroes/crisis-center/feature-list';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes),
    CrisisCenterModule,
    CrisisCenterFeatureListModule,
  ],
  exports: [RouterModule],
})
export class CrisisCenterFeatureShellModule {}
