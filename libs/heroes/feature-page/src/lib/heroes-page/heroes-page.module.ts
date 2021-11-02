import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesUiListModule } from '@tour-of-heroes/heroes/ui-list';

import { HeroesPageComponent } from './heroes-page.component';

@NgModule({
  declarations: [HeroesPageComponent],
  imports: [CommonModule, RouterModule, HeroesUiListModule],
})
export class HeroesPageModule {}
