import { defineConfig } from 'rolldown'

export default defineConfig({
  input: {
    index: 'src/index.ts',
    'locales/de': 'src/locales/de.ts',
    'locales/hu': 'src/locales/hu.ts'
  },
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js'
  }
})
