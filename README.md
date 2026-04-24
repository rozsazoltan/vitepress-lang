# vitepress-lang

Default VitePress UI translations for the default theme.

Currently included languages:

- German: `de`
- Hungarian: `hu`

## Install

Create a VitePress project:

```bash
npm create vitepress@latest
```

Install this package:

```bash
npm install vitepress-lang
```

## Use one language

`.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'
import { defineLangConfig } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'My Docs',
      description: 'English documentation',
      themeConfig: {
        nav: [{ text: 'Home', link: '/' }]
      }
    },

    de: defineLangConfig('de', {
      title: 'Meine Dokumentation',
      description: 'Deutsche Dokumentation',
      themeConfig: {
        nav: [{ text: 'Startseite', link: '/de/' }]
      }
    })
  }
})
```

`defineLangConfig()` deep-merges the built-in VitePress UI translations with your own locale config.

## Hungarian example

```ts
import { defineConfig } from 'vitepress'
import { defineLangConfig } from 'vitepress-lang'

export default defineConfig({
  locales: {
    hu: defineLangConfig('hu', {
      title: 'Dokumentáció',
      description: 'Magyar dokumentáció',
      themeConfig: {
        nav: [{ text: 'Kezdőlap', link: '/hu/' }]
      }
    })
  }
})
```

## Algolia search

Local search is used by default. For Algolia, pass `searchProvider: 'algolia'`:

```ts
de: defineLangConfig(
  'de',
  {
    title: 'Meine Dokumentation'
  },
  {
    searchProvider: 'algolia'
  }
)
```

## Custom locale key

If your VitePress locale key is not the same as the language code, use `localeKey`:

```ts
root: defineLangConfig(
  'de',
  {
    label: '',
    link: '/',
    title: 'Meine Dokumentation'
  },
  {
    localeKey: 'root'
  }
)
```

## Import raw language packs

```ts
import { de, hu } from 'vitepress-lang'
```

Or import one pack directly:

```ts
import { de } from 'vitepress-lang/de'
import { hu } from 'vitepress-lang/hu'
```

## Contributing a new language

1. Add a new folder under `src/locales`, for example `src/locales/fr`.
2. Copy the files from an existing locale folder:
   - `theme.ts`
   - `local-search.ts`
   - `algolia-search.ts`
   - `ask-ai.ts`
   - `index.ts`
3. Translate every string.
4. Add the new locale code to `SupportedLocale` in `src/types.ts`.
5. Export the locale from `src/locales/index.ts`.
6. Add a subpath export to `package.json` if the language should be directly importable, for example `vitepress-lang/fr`.
7. Run checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Then open a pull request.

## Updating an existing language

Edit the relevant files under `src/locales/<locale>` and open a pull request with a short note explaining the change.

## Build

```bash
npm install
npm run build
```

## Publish

```bash
npm login
npm run publish:public
```
