export default {
  transform: {
    '^.+\\.m?[tj]s$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
    '**/PrintProgressTest.js',
    '**/ValidatorTest.js',
    '**/NumberGeneratorTest.js',
    '**/GameAnalyzerTest.js',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};
