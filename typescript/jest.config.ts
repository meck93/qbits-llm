import type { Config } from "jest";

const config: Config = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["index.ts", "test/*"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/../../test/__mocks__/styleMock.ts",
    "\\.(svg|ico|jpg|jpeg|png|gif|cur|ani|ttf|woff|woff2|eot)$": "<rootDir>/../../test/__mocks__/styleMock.ts",
    "@ewz/kus-service-api": "<rootDir>/../../packages/service-api/src",
    "@ewz/kus-components": "<rootDir>/../../packages/components/src",
    "@ewz/elements": "<rootDir>/../../packages/elements/src",
  },
  roots: ["<rootDir>/src/"],
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testRegex: "src/.*(spec|test)\\.(jsx?|tsx?)$",
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  transform: {
    "^.+\\.[jt]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [
    `/node_modules/
        (?!lit)
        (?!lit-html)
        (?!lit-element)
        (?!@qs)
        `,
  ],
};

export default config;
