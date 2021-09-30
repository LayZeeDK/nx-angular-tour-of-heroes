import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { ManageHeroesModule } from './manage-heroes/manage-heroes.module';

const routes: Routes = [
  {
    path: '',
    component: ManageHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ManageHeroesModule],
})
export class AdminFeatureManageHeroesModule {}
