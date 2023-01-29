module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-async-promise-executor': 'off',
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
};
