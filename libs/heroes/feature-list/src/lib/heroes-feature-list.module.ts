import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListModule } from './hero-list/hero-list.module';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent,
    data: { animation: 'heroes' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HeroListModule],
})
export class HeroesFeatureListModule {}
