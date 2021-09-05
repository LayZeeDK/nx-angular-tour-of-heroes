import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthFeatureLoginPageModule } from '@tour-of-heroes/auth/feature-login-page';
import { HeroesFeaturePageModule } from '@tour-of-heroes/heroes/feature-page';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesFeaturePageModule,
    AuthFeatureLoginPageModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, ComposeMessageComponent, PageNotFoundComponent],
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
