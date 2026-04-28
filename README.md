# vitepress-lang

`vitepress-lang` provides ready-to-use UI translations for the VitePress default theme.

It translates VitePress default theme labels, local search UI, Algolia search UI, and Ask AI UI strings.

|Available|Status|
|:---|---:|
| | |
|(en) English (source)|100%|
| | |
|(de) Deutsch|99%|
|(es) Spanish|99%|
|(fr) French|99%|
|(hu) Hungarian|99%|

- [Get started](#get-started)
- [Usage](#usage)
  - [Algolia search](#algolia-search)
  - [Custom locale key](#custom-locale-key)
  - [Raw language packs](#raw-language-packs)
- [Contributing](#contributing)

## Get started

Create a VitePress project:

```sh
npm create vitepress@latest
````

Install `vitepress-lang`:

```sh
npm install -D vitepress-lang
```

## Usage

Use `defineLangConfig()` inside `.vitepress/config.ts`. The helper deep-merges the built-in translation pack with your own VitePress locale config.

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
    }),

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

### Algolia search

Local search is used by default.

For Algolia, pass `searchProvider: 'algolia'`:

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

### Custom locale key

If your VitePress locale key is not the same as the language code, use `localeKey`.

This is useful for `root` locales:

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

### Raw language packs

It is also possible to access the RAW language data, allowing you to work with it before use.

```ts
import { de } from 'vitepress-lang/de'
import { hu } from 'vitepress-lang/hu'
// ...
```

> [!WARNING]
> Importing all language packs does not automatically register all VitePress locales, but if you spread or generate config from every pack, every language you include will appear in your VitePress language switcher.

## Contributing

Language contributions are welcome.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for adding a new language or improving an existing one.

## License & Acknowledgments

This project would not exist without the creators and contributors of [VitePress](https://github.com/vuejs/vitepress). It is open source and released under the [GNU Affero General Public License v3.0 (AGPL-3.0)](https://www.gnu.org/licenses/agpl-3.0.html).

Copyright (C) 2020–present [Zoltán Rózsa](https://github.com/rozsazoltan)
