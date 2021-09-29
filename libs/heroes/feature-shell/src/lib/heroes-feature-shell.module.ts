import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent, HeroesScam } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@tour-of-heroes/heroes/feature-detail').then(
            (m) => m.HeroesFeatureDetailModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('@tour-of-heroes/heroes/feature-list').then(
            (m) => m.HeroesFeatureListModule
          ),
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), HeroesScam],
})
export class HeroesFeatureShellModule {}
