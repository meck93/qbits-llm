module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: __dirname + "/tsconfig.json",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    jest: {
      version: 28,
    },
    "import/resolver": {
      alias: {
        map: [],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // Override default rules due to significant performance impact
    "import/namespace": "off",
    "import/no-named-as-default": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "no-restricted-imports": [
      "error",
      {
        paths: ["@webbloqs/react", "!@webbloqs/react/lib/*"], // disallow importing from @webbloqs/react to avoid huge bundle size
      },
    ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // "prettier/prettier": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "warn",
    "max-len": ["error", { code: 150, tabWidth: 4 }],
    "arrow-parens": ["error", "as-needed"],
    "no-console": "error",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    curly: "error",
  },
  ignorePatterns: [
    "*.min.js",
    "lib",
    "target",
    ".build",
    "dist",
    "coverage",
    "storybook-static",
    "node_modules",
    ".vscode",
    ".idea",
    "yarn.lock",
    "yarn-error.log",
  ],
  overrides: [
    {
      files: ["**/*.spec.ts", "**/*.spec.tsx"],
      env: {
        jest: true,
      },
      rules: {
        "max-len": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
