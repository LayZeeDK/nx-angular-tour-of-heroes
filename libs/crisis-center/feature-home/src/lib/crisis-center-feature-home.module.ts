import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisCenterHomeModule } from './crisis-center-home/crisis-center-home.module';

const routes: Routes = [
  {
    path: '',
    component: CrisisCenterHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CrisisCenterHomeModule],
})
export class CrisisCenterFeatureHomeModule {}
