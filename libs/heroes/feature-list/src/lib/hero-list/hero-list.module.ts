import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';

@NgModule({
  declarations: [HeroListComponent],
  imports: [CommonModule, RouterModule],
})
export class HeroListModule {}
