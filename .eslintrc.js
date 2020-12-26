const [WARN, ERROR] = [1, 2];

module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: 'off',
    quotes: [
      ERROR,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-param-reassign': [
      'error',
      { ignorePropertyModificationsForRegex: ['state'] },
    ],
    semi: ERROR,
    'eol-last': WARN,
    'no-trailing-spaces': WARN,
  },
};
