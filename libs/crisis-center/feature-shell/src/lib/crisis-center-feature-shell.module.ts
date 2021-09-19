import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CrisisCenterFeatureListModule,
  CrisisCenterHomeComponent,
  CrisisCenterHomeModule,
  CrisisDetailComponent,
  CrisisDetailModule,
  CrisisListComponent,
} from '@tour-of-heroes/crisis-center/feature-list';
import { CanDeactivateGuard } from '@tour-of-heroes/shared/data-access-navigation';

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
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolverService,
            },
          },
          {
            path: '',
            component: CrisisCenterHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes),
    CrisisCenterModule,
    CrisisCenterFeatureListModule,
    CrisisCenterHomeModule,
    CrisisDetailModule,
  ],
  exports: [RouterModule],
})
export class CrisisCenterFeatureShellModule {}
