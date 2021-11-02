import { NgModule } from '@angular/core';

import { HeroListModule } from './hero-list/hero-list.module';

@NgModule({
  exports: [HeroListModule],
})
export class HeroesUiListModule {}
