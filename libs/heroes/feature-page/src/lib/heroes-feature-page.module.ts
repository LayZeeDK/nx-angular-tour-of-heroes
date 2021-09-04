import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, HeroesRoutingModule],
  declarations: [HeroListComponent, HeroDetailComponent],
})
export class HeroesFeaturePageModule {}
