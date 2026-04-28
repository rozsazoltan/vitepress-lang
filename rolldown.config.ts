import { defineConfig } from 'rolldown'
import fs from 'fs'

const localesDir = 'src/locales'

const locales = fs.readdirSync(localesDir)
  .filter(dir => fs.existsSync(`${localesDir}/${dir}/index.ts`))

const input = {
  index: 'src/index.ts',
  ...Object.fromEntries(
    locales.map(l => [l, `${localesDir}/${l}/index.ts`])
  )
}

export default defineConfig({
  input,
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js'
  }
})
