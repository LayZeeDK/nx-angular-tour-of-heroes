import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent, HeroesScam } from './heroes/heroes.component';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },

  {
    path: 'superheroes',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
];

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
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), HeroesScam],
})
export class HeroesFeatureShellModule {}
