import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesModule } from './heroes/heroes.module';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    data: { animation: 'heroes' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HeroesModule],
})
export class HeroesFeatureListModule {}
