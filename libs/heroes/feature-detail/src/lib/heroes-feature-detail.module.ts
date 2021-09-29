import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailModule } from './hero-detail/hero-detail.module';

const routes: Routes = [
  {
    path: '',
    component: HeroDetailComponent,
    data: { animation: 'hero' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HeroDetailModule],
})
export class HeroesFeatureDetailModule {}
