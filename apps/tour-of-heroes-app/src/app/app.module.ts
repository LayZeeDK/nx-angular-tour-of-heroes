import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppScam } from './app.component';
import { CoreModule } from './core.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [CoreModule.forRoot(), AppRoutingModule, AppScam],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
