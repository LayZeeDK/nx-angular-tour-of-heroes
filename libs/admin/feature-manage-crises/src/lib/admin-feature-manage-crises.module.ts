import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageCrisesModule } from './manage-crises/manage-crises.module';

const routes: Routes = [
  {
    path: '',
    component: ManageCrisesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ManageCrisesModule],
})
export class AdminFeatureManageCrisesModule {}
