import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesUiListModule } from '@tour-of-heroes/heroes/ui-list';

import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, RouterModule, HeroesUiListModule],
})
export class HeroesModule {}
