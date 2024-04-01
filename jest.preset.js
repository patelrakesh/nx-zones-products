const nxPreset = require('@nx/jest/preset').default;
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.base.json');

module.exports = {
  ...nxPreset,
  testEnvironment: 'jsdom',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: process.cwd(),
  }),
  collectCoverageFrom: ['<rootDir>/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    'node_modules/',
    '\\.d\\.ts$',
    'middleware.ts',
    'constants/',
    'type.ts',
    'jest.config.ts',
    'next.config.js',
  ],
  coverageReporters: ['lcovonly', 'text', 'html'],
  passWithNoTests: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
