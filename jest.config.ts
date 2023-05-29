export default {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '<rootDir>/jest.setup.ts',
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
  modulePathIgnorePatterns: [
    "<rootDir>/__tests__/__mocks__"
  ]
}
