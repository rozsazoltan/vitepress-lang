# vitepress-lang

Default VitePress UI translations for the default theme and search.

Included languages:

- German (`de`)
- Hungarian (`hu`)

## Install from zero

```bash
npm create vitepress@latest docs
cd docs
npm install vitepress-lang
```

## Use one language

This example uses Hungarian as the root language of a minimal VitePress site.

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { defineRootLang } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',
  description: 'My VitePress site',

  locales: {
    ...defineRootLang('hu')
  }
})
```

Use a prefixed locale like this:

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { defineLang } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',
  description: 'My VitePress site',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ...defineLang('hu')
  }
})
```

This creates a `hu` locale entry with Hungarian default theme and local-search translations.

## Use all bundled languages

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { defineAllLangs } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',
  description: 'My VitePress site',

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ...defineAllLangs()
  }
})
```

Warning: every locale added to VitePress `locales` can appear in the default theme language switcher. Only import all bundled languages if you really want all of them listed.

## Use selected languages

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { defineLangs } from 'vitepress-lang'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ...defineLangs(['de', 'hu'])
  }
})
```

## Direct locale imports

Use direct imports if you only want the raw locale data.

```ts
import { hu } from 'vitepress-lang/hu'
import { de } from 'vitepress-lang/de'
```

The detailed folder exports are also available:

```ts
import { huThemeConfig, huLocalSearch } from 'vitepress-lang/locales/hu'
import { deThemeConfig, deLocalSearch } from 'vitepress-lang/locales/de'
```

## Algolia search

By default, helpers generate local-search config. Use `searchProvider: 'algolia'` for Algolia translations.

```ts
import { defineConfig } from 'vitepress'
import { defineLang } from 'vitepress-lang'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ...defineLang('de', { searchProvider: 'algolia' })
  }
})
```

## Development

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

## Contributing

### Add a new language

1. Create a new locale folder, for example `src/locales/fr/`.
2. Copy the files from `src/locales/de/` or `src/locales/hu/`:
   - `meta.ts`
   - `theme.ts`
   - `local-search.ts`
   - `algolia-search.ts`
   - `ask-ai-side-panel.ts`
   - `index.ts`
3. Rename the exported symbols from the copied language code to the new one, for example `deThemeConfig` -> `frThemeConfig`.
4. Translate every string. Keep the object shapes unchanged.
5. Add the new language code to `SupportedLocale` in `src/types.ts`.
6. Export the new locale from `src/locales/index.ts`.
7. Add the new locale to `localePacks` in `src/helpers/create-config.ts`.
8. Add a top-level file like `src/fr.ts` if direct imports should work.
9. Add package subpath exports in `package.json`, for example `./fr` and `./locales/fr`.
10. Add the new entry points to `rolldown.config.mjs`.
11. Run the checks:

```bash
npm run lint
npm run typecheck
npm run build
```

### Update an existing language

1. Edit the relevant files in `src/locales/<locale>/`.
2. Keep all keys and nesting unchanged.
3. Run lint, typecheck, and build.
4. Open a PR with a short summary of the wording changes.

### Submit a PR

```bash
git checkout -b feat/add-fr-locale
npm install
npm run lint
npm run typecheck
npm run build
git add .
git commit -m "Add French locale"
git push origin feat/add-fr-locale
```

In the PR description, include:

- the language code
- whether this is a new locale or an update
- any wording decisions that need review
