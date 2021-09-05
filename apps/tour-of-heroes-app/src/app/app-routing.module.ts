import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from '@tour-of-heroes/shared/data-access-navigation';
import { AuthGuard } from '@tour-of-heroes/shared/data-access-security';
import { ComposeMessageComponent } from '@tour-of-heroes/shared/ui-dialogs';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
      import('@tour-of-heroes/crisis-center/feature-page').then(
        (m) => m.CrisisCenterFeaturePageModule
      ),
    data: { preload: true },
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
