import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';

@NgModule({
  declarations: [CrisisListComponent],
  exports: [CrisisListComponent],
  imports: [CommonModule, RouterModule],
})
export class CrisisListModule {}
