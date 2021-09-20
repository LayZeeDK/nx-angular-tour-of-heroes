import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrisisCenterFeatureListModule } from '@tour-of-heroes/crisis-center/feature-list';

import { CrisisCenterComponent } from './crisis-center.component';

@NgModule({
  declarations: [CrisisCenterComponent],
  imports: [RouterModule, CrisisCenterFeatureListModule],
})
export class CrisisCenterModule {}
