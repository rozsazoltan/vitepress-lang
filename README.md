# vitepress-lang

Default VitePress UI translations for `themeConfig` and search.

Included now:
- German (`de`)
- Hungarian (`hu`)

## Install

Create a VitePress site and install the package.

```bash
npm init
npx vitepress init
npm install vitepress-lang
```

## Import one language

Use this if you only want one locale pack in your project.

```ts
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { createRootLocaleConfig } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',
  description: 'Example site',
  themeConfig: {
    ...createRootLocaleConfig('de')
  }
})
```

You can also import a single locale file directly:

```ts
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { de } from 'vitepress-lang/locales/de'

export default defineConfig({
  title: 'My Docs',
  description: 'Example site',
  themeConfig: {
    ...de.themeConfig,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: de.search.local
        }
      }
    }
  }
})
```

## Import all languages

Use this if you want access to every bundled language.

```ts
// docs/.vitepress/config.ts
import { defineConfig } from 'vitepress'
import { localePacks } from 'vitepress-lang'

export default defineConfig({
  title: 'My Docs',
  description: 'Example site',
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: {
        ...localePacks.de.themeConfig,
        search: {
          provider: 'local',
          options: {
            locales: {
              root: localePacks.de.search.local,
              hu: localePacks.hu.search.local
            }
          }
        }
      }
    },
    hu: {
      label: 'Magyar',
      lang: 'hu',
      link: '/hu/',
      themeConfig: {
        ...localePacks.hu.themeConfig
      }
    }
  }
})
```

Warning: if you wire every included language into your VitePress `locales` config, those locales will also appear in your language switcher.

## API

### Main exports

```ts
import {
  de,
  hu,
  localePacks,
  getLocalePack,
  createRootLocaleConfig,
  createNamedLocaleConfig,
  createAlgoliaRootLocaleConfig,
  createAlgoliaNamedLocaleConfig
} from 'vitepress-lang'
```

### Direct locale imports

```ts
import { de } from 'vitepress-lang/locales/de'
import { hu } from 'vitepress-lang/locales/hu'
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

1. Create a new file in `src/locales/`, for example `src/locales/fr.ts`.
2. Copy an existing locale file such as `src/locales/de.ts`.
3. Translate all fields in:
   - `themeConfig`
   - local search
   - Algolia search
   - Ask AI side panel
4. Export the final locale pack as:

```ts
export const fr: VitePressLocalePack = {
  themeConfig: frThemeConfig,
  search: {
    local: { translations: frLocalSearch },
    algolia: { translations: frAlgoliaSearch },
    askAi: { sidePanel: frAskAiSidePanel }
  }
}
```

5. Add the exports to `src/locales/index.ts`.
6. Update `SupportedLocale` in `src/types.ts`.
7. Add the new locale to `localePacks` in `src/helpers/create-config.ts`.
8. Add a new subpath export in `package.json` if you want direct imports like `vitepress-lang/locales/fr`.
9. Run:

```bash
npm run lint
npm run typecheck
npm run build
```

### Update an existing language

1. Edit the relevant file in `src/locales/`.
2. Keep the object shape unchanged.
3. Run lint, typecheck, and build.
4. Open a PR with a short summary of what changed.

### Submit a PR

```bash
git checkout -b feat/add-fr-locale
npm install
npm run lint
npm run typecheck
npm run build
git commit -am "Add French locale"
git push origin feat/add-fr-locale
```

Then open a pull request and include:
- the language code
- whether it is a new locale or an update
- any wording choices that may need review
