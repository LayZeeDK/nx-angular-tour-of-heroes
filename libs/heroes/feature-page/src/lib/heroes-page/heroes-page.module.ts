import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesUiPageModule } from '@tour-of-heroes/heroes/ui-page';

import { HeroesPageComponent } from './heroes-page.component';

@NgModule({
  declarations: [HeroesPageComponent],
  imports: [CommonModule, RouterModule, HeroesUiPageModule],
})
export class HeroesPageModule {}
