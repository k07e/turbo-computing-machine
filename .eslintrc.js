module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['**/*.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['@types/turbo-computing-machine/*.d.ts'],
      rules: {
        '@typescript-eslint/no-invalid-void-type': 'off'
      }
    }
  ]
}
