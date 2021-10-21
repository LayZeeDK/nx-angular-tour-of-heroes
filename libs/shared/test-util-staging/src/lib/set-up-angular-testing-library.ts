import { configure } from '@testing-library/angular';

export function setUpAngularTestingLibrary(): void {
  configure({
    excludeComponentDeclaration: true,
    dom: {
      throwSuggestions: true,
    },
  });
}
