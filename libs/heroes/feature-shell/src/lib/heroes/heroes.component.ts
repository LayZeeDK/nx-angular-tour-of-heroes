import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  template: `<router-outlet></router-outlet>`,
})
export class HeroesComponent {}

@NgModule({
  declarations: [HeroesComponent],
  imports: [RouterModule],
})
export class HeroesScam {}
