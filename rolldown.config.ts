import { defineConfig } from 'rolldown'

export default defineConfig({
  input: {
    index: 'src/index.ts',
    de: 'src/de.ts',
    hu: 'src/hu.ts',
    'locales/de/index': 'src/locales/de/index.ts',
    'locales/hu/index': 'src/locales/hu/index.ts'
  },
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js'
  }
})
