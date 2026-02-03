const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/test/**/*.test.ts"],
  testPathIgnorePatterns: ["/dist/"],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};