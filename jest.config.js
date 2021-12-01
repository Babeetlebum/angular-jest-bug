const { resolve } = require("path");

const jestBaseConfig = {
  globals: {
    "ts-jest": {
      diagnostics: true,
      ignoreCodes: [151001],
    },
  },
  preset: "jest-preset-angular",
  roots: [resolve(__dirname, "./src/app")],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageDirectory: resolve(__dirname, "../coverage"),
  collectCoverageFrom: ["**/*.ts"],
  coveragePathIgnorePatterns: [
    ".*\\.mock.ts$",
    ".*\\.module.ts$",
    ".*\\.config.ts$",
    ".*\\.models.ts$",
    ".*\\.directive.ts$",
    ".*\\.font.ts$",
    ".*\\.worker.ts$",
  ],
  coverageReporters: ["lcov", "text-summary"]
};

const ciSpecificConfig = {
  collectCoverage: true,
  coverageReporters: ["lcovonly", "text-summary"],
};

module.exports = jestBaseConfig;
