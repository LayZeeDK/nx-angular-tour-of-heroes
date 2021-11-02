import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesPageComponent } from './heroes-page/heroes-page.component';
import { HeroesPageModule } from './heroes-page/heroes-page.module';

const routes: Routes = [
  {
    path: '',
    component: HeroesPageComponent,
    data: { animation: 'heroes' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HeroesPageModule],
})
export class HeroesFeaturePageModule {}
