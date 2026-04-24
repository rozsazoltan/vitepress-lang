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

## Contributing

### Create a new language

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feat/fr-language
````

3. Add a new folder under `src/locales`, for example `src/locales/fr`.
4. Copy the files from an existing locale folder:

   * `theme.ts`
   * `local-search.ts`
   * `algolia-search.ts`
   * `ask-ai.ts`
   * `index.ts`
5. Translate every string.
6. Add the new locale code to `SupportedLocale` in `src/types.ts`.
7. Export the locale from `src/locales/index.ts`.
8. Add a subpath export to `package.json` if the language should be directly importable, for example `vitepress-lang/fr`.
9. Run checks:

```bash
npm run lint
npm run typecheck
npm run build
```

10. Commit your changes with a clear Conventional Commit message, for example:

```bash
git commit -m "feat(fr): add French translations"
```

11. Push your branch and open a pull request:

```bash
git push origin feat/fr-language
```

Suggested PR title:

```txt
feat(fr): add French translations
```

### Updating an existing language

1. Fork the repository.
2. Create a branch:

```bash
git checkout -b fix/de-translations
````

3. Edit the relevant files under `src/locales/<locale>`.
4. Run checks:

```bash
npm run lint
npm run typecheck
npm run build
```

5. Commit your changes:

```bash
git commit -m "fix(de): improve German translations"
```

6. Push your branch and open a pull request:

```bash
git push origin fix/de-translations
```

Suggested PR title:

```txt
fix(de): improve German translations
```
