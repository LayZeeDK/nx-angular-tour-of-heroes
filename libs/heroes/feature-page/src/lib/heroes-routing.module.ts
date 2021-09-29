import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
