module.exports = {
  extends: ["eslint:recommended", "prettier", "google"],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-invalid-this": "off",
    "max-len": "off",
    "no-console": "warn",
    "new-cap": "off",
    "object-curly-spacing": ["error", "always"],
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }]
  }
};
