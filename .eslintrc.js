module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    },
  },
  "env": {
    "browser": true,
    "jest/globals": true,
    "mocha": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "plugins": [
    "jest",
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": 1
  }
};
