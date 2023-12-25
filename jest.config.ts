import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Specify the Next.js directory
});

// Custom Jest configuration
const customJestConfig: Config = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for Jest
  moduleNameMapper: {
    // Handle module aliases (adjust based on your tsconfig paths)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    // Add other mappings as needed
  },
  // Add any additional configuration that your project requires
};

export default createJestConfig(customJestConfig);
