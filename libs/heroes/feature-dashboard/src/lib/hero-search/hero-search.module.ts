import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [HeroSearchComponent],
  exports: [HeroSearchComponent],
  imports: [CommonModule, RouterModule],
})
export class HeroSearchModule {}
