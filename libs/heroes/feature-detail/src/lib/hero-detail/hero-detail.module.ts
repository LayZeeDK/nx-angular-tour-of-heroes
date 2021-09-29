import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule],
})
export class HeroDetailModule {}
