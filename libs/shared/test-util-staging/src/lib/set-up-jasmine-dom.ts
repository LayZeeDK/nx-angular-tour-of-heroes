// Issue: node_modules/@types/testing-library__jasmine-dom/index.d.ts' is not a module.
// @ts-ignore
import JasmineDOM from '@testing-library/jasmine-dom';

export function setUpJasmineDom(): void {
  beforeAll(() => {
    jasmine.addMatchers(JasmineDOM);
  });
}
