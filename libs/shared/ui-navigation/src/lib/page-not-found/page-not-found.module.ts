import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageNotFoundComponent,
  PageNotFoundScam,
} from './page-not-found.component';

const routes: Routes = [{ path: '', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), PageNotFoundScam],
})
export class PageNotFoundModule {}
