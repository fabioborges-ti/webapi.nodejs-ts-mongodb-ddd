export default {
  roots: ['<rootDir>'],
  //collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/*.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'tests/coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  preset: '@shelf/jest-mongodb',
};
