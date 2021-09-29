import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent, HeroesScam } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('@tour-of-heroes/heroes/feature-list').then(
            (m) => m.HeroesFeatureListModule
          ),
      },
      { path: 'hero', redirectTo: 'superhero' },
      {
        path: 'superhero',
        loadChildren: () =>
          import('@tour-of-heroes/heroes/feature-detail').then(
            (m) => m.HeroesFeatureDetailModule
          ),
      },
      { path: 'heroes', redirectTo: 'superheroes' },
      {
        path: 'superheroes',
        loadChildren: () =>
          import('@tour-of-heroes/heroes/feature-list').then(
            (esModule) => esModule.HeroesFeatureListModule
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
