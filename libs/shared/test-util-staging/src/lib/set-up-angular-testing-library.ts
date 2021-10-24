import { configure } from '@testing-library/angular';

export function setUpAngularTestingLibrary(): void {
  configure({
    // Assume SCAMs
    excludeComponentDeclaration: true,
    dom: {
      throwSuggestions: true,
    },
  });
}
