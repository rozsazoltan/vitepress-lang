import { defineConfig } from 'rolldown'

export default defineConfig({
  input: {
    index: 'src/index.ts',
    en: 'src/locales/en/index.ts',
    de: 'src/locales/de/index.ts',
    hu: 'src/locales/hu/index.ts'
  },
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js'
  }
})
