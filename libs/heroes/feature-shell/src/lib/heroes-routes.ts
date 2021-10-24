import { Routes } from '@angular/router';

const loadHeroesFeatureShell = () =>
  import('@tour-of-heroes/heroes/feature-shell').then(
    (esModule) => esModule.HeroesFeatureShellModule
  );

export const heroesDefaultRoutePath = 'superheroes';

export const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: heroesDefaultRoutePath },
  { path: heroesDefaultRoutePath, loadChildren: loadHeroesFeatureShell },
  { path: 'hero', redirectTo: 'superhero' },
  { path: 'superhero', loadChildren: loadHeroesFeatureShell },
];
