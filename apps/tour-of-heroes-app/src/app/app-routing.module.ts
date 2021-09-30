import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from '@tour-of-heroes/shared/data-access-navigation';
import { AuthGuard } from '@tour-of-heroes/shared/data-access-security';
import { ComposeMessageComponent, ComposeMessageModule } from '@tour-of-heroes/shared/ui-dialogs';
import { PageNotFoundComponent, PageNotFoundModule } from '@tour-of-heroes/shared/ui-navigation';

const loadHeroesFeatureShell = () =>
  import('@tour-of-heroes/heroes/feature-shell').then(
    (esModule) => esModule.HeroesFeatureShellModule
  );

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@tour-of-heroes/admin/feature-shell').then(
        (esModule) => esModule.AdminFeatureShellModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
      import('@tour-of-heroes/crisis-center/feature-shell').then(
        (m) => m.CrisisCenterFeatureShellModule
      ),
    data: { preload: true },
  },
  { path: 'heroes', redirectTo: 'superheroes' },
  { path: 'superheroes', loadChildren: loadHeroesFeatureShell },
  { path: 'hero', redirectTo: 'superhero' },
  {
    path: 'superhero',
    loadChildren: loadHeroesFeatureShell,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@tour-of-heroes/auth/feature-shell').then(
        (esModule) => esModule.AuthFeatureShellModule
      ),
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
      initialNavigation: 'enabledNonBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      paramsInheritanceStrategy: 'always',
    }),
    ComposeMessageModule,
    PageNotFoundModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
