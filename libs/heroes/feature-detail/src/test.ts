import 'zone.js';
import 'zone.js/testing';

import {
  setUpAngularTestingLibrary,
  setUpJasmineDom,
  setUpTestbed,
} from '@tour-of-heroes/shared/test-util-staging';

// This file is required by karma.conf.js and loads recursively all the .spec and framework files
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

setUpJasmineDom();

// First, initialize the Angular testing environment.
setUpTestbed();
setUpAngularTestingLibrary();
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
