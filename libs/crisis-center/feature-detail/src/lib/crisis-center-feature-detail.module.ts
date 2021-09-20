import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@tour-of-heroes/shared/data-access-navigation';

import { CrisisDetailResolverService } from './crisis-detail/crisis-detail-resolver.service';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisDetailModule } from './crisis-detail/crisis-detail.module';

const routes: Routes = [
  {
    path: '',
    component: CrisisDetailComponent,
    canDeactivate: [CanDeactivateGuard],
    resolve: {
      crisis: CrisisDetailResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CrisisDetailModule],
})
export class CrisisCenterFeatureDetailModule {}
