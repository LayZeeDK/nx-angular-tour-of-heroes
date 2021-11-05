import {
  ComponentFixtureAutoDetect,
  getTestBed,
  TestBed,
  TestModuleMetadata,
} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

function patchTestbed(): void {
  const isUnpatched =
    testbed.configureTestingModule === actualConfigureTestingModule;

  if (isUnpatched) {
    testbed.configureTestingModule = (moduleDef: TestModuleMetadata): void => {
      actualConfigureTestingModule.call(testbed, {
        ...moduleDef,
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true },
          ...(moduleDef.providers ?? []),
        ],
      });
    };

    // Run at least once in case `TestBed.inject` is called without calling
    // `TestBed.configureTestingModule`
    beforeEach(() => {
      testbed.configureTestingModule({});
    });
  }
}

export function setUpTestbed(): void {
  testbed.resetTestEnvironment();
  testbed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
      teardown: {
        destroyAfterEach: true,
      },
    }
  );

  patchTestbed();
}

const testbed = getTestBed();
const actualConfigureTestingModule = TestBed.configureTestingModule;
