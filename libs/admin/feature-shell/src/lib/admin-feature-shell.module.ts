import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@tour-of-heroes/shared/data-access-security';

import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'crises',
            loadChildren: () =>
              import('@tour-of-heroes/admin/feature-manage-crises').then(
                (esModule) => esModule.AdminFeatureManageCrisesModule
              ),
          },
          {
            path: 'heroes',
            loadChildren: () =>
              import('@tour-of-heroes/admin/feature-manage-heroes').then(
                (esModule) => esModule.AdminFeatureManageHeroesModule
              ),
          },
          {
            path: '',
            loadChildren: () =>
              import('@tour-of-heroes/admin/feature-dashboard').then(
                (esModule) => esModule.AdminFeatureDashboardModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminModule],
})
export class AdminFeatureShellModule {}
