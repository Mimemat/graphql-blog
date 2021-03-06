const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { name } = require('./package.json');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  displayName: name,
  name,
  verbose: true,
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/src/shared/tests/setupTests.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src/" }),
};