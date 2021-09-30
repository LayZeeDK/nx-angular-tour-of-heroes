import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminDashboardModule],
})
export class AdminFeatureDashboardModule {}
