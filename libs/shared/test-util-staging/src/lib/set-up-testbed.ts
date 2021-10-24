import { ComponentFixtureAutoDetect, getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

export function setUpTestbed(): void {
  const testbed = getTestBed();

  testbed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
      teardown: {
        destroyAfterEach: true,
      },
    }
  );
  testbed.configureCompiler({
    providers: [
      {
        provide: ComponentFixtureAutoDetect,
        useValue: true,
      },
    ],
  });
}
