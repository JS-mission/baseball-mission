export default {
  transform: {
    '^.+\\.m?[tj]s$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
    '**/PrintProgressTest.js',
    '**/ValidatorTest.js',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};
