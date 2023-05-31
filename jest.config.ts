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
    '^@pages/(.*)': '<rootDir>/src/pages/$1',
    '^@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '^@services/(.*)': '<rootDir>/src/services/$1',
    '^@store/(.*)': '<rootDir>/src/store/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/__tests__/__mocks__/fileMock.js',
  },
  modulePathIgnorePatterns: [
    "<rootDir>/__tests__/__mocks__"
  ]
}
