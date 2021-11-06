import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from '@tour-of-heroes/heroes/data-access';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

const isTest = 'jasmine' in window;

@NgModule({
  imports: [
    BrowserAnimationsModule.withConfig({
      disableAnimations: isTest,
    }),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
})
export class CoreRootModule {}

@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreRootModule> {
    return {
      ngModule: CoreRootModule,
    };
  }
}
