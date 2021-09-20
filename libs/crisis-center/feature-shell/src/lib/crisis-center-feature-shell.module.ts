import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@tour-of-heroes/crisis-center/feature-detail').then(
            (esModule) => esModule.CrisisCenterFeatureDetailModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('@tour-of-heroes/crisis-center/feature-home').then(
            (esModule) => esModule.CrisisCenterFeatureHomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes), CrisisCenterModule],
  exports: [RouterModule],
})
export class CrisisCenterFeatureShellModule {}
