import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent, AuthScam } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@tour-of-heroes/auth/feature-login').then(
            (esModule) => esModule.AuthFeatureLoginModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthScam],
})
export class AuthFeatureShellModule {}
