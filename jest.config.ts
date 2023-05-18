import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  testPathIgnorePatterns: ['/.history/'],
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
  resetMocks: false,
  // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{js,jsx,ts,tsx}',
  ],
  transformIgnorePatterns: ['^.+\\.js$'],
}

export default config
