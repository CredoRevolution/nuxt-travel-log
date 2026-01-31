import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default withNuxt()
  .append({
    plugins: {
      prettier: eslintPluginPrettier,
    },
    ignores: ['**/migrations'],
    rules: {
      'prettier/prettier': 'error',
    },
  })
  .append(eslintConfigPrettier)
