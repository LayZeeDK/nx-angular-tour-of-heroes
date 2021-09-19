import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes), CrisisCenterModule],
  exports: [RouterModule],
})
export class CrisisCenterFeatureShellModule {}
