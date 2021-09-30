import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  styles: [':host { display: block; }'],
  selector: 'app-auth-shell',
  template: `<router-outlet></router-outlet>`,
})
export class AuthComponent {}

@NgModule({
  declarations: [AuthComponent],
  imports: [RouterModule],
})
export class AuthScam {}
