// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // add matchers and config
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // CSS module mocks
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // asset mocks
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], // ignore build & deps
  collectCoverage: true, // collect coverage info
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov'], // human readable + lcov for CI
  verbose: true, // detailed test results
};
