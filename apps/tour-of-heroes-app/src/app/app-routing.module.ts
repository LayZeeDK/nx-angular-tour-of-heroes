import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { heroesDefaultRoutePath, heroesRoutes } from '@tour-of-heroes/heroes/feature-shell';
import { SelectivePreloadingStrategyService } from '@tour-of-heroes/shared/data-access-navigation';
import { AuthGuard } from '@tour-of-heroes/shared/data-access-security';
import { ComposeMessageComponent, ComposeMessageModule } from '@tour-of-heroes/shared/ui-dialogs';
import { PageNotFoundComponent, PageNotFoundModule } from '@tour-of-heroes/shared/ui-navigation';

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
  ...heroesRoutes,
  {
    path: 'login',
    loadChildren: () =>
      import('@tour-of-heroes/auth/feature-shell').then(
        (esModule) => esModule.AuthFeatureShellModule
      ),
  },
  { path: '', redirectTo: heroesDefaultRoutePath, pathMatch: 'full' },
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
