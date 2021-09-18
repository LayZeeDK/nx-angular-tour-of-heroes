import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthFeatureLoginPageModule } from '@tour-of-heroes/auth/feature-login-page';
import { HeroesFeaturePageModule } from '@tour-of-heroes/heroes/feature-page';
import { ComposeMessageModule } from '@tour-of-heroes/shared/ui-dialogs';
import { PageNotFoundModule } from '@tour-of-heroes/shared/ui-navigation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesFeaturePageModule,
    AuthFeatureLoginPageModule,
    AppRoutingModule,
    ComposeMessageModule,
    PageNotFoundModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
