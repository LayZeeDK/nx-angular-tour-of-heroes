import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent, AuthScam } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), AuthScam],
})
export class AuthFeatureShellModule {}
