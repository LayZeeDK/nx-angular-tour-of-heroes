import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFeatureLoginPageModule } from '@tour-of-heroes/auth/feature-login-page';
import { HeroesFeaturePageModule } from '@tour-of-heroes/heroes/feature-page';
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
      import('@tour-of-heroes/admin/feature-page').then(
        (m) => m.AdminFeaturePageModule
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
  {
    path: 'heroez',
    loadChildren: () =>
      import('@tour-of-heroes/heroes/feature-shell').then(
        (esModule) => esModule.HeroesFeatureShellModule
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
    }),
    HeroesFeaturePageModule,
    AuthFeatureLoginPageModule,
    ComposeMessageModule,
    PageNotFoundModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
