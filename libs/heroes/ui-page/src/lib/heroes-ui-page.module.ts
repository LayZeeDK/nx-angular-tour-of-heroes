import { NgModule } from '@angular/core';

import { HeroFormModule } from './hero-form/hero-form.module';
import { HeroListModule } from './hero-list/hero-list.module';

@NgModule({
  exports: [HeroFormModule, HeroListModule],
})
export class HeroesUiPageModule {}
