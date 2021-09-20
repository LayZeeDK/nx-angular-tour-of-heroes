import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CrisisDetailComponent } from './crisis-detail.component';

@NgModule({
  declarations: [CrisisDetailComponent],
  imports: [CommonModule, FormsModule],
})
export class CrisisDetailModule {}
