import { NgModule } from '@angular/core';

import { CrisisListModule } from './crisis-list/crisis-list.module';

@NgModule({
  exports: [CrisisListModule],
})
export class CrisisCenterFeatureListModule {}
