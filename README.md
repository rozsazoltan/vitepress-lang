# vitepress-lang

`vitepress-lang` provides ready-to-use UI translations for the VitePress default theme.

It translates VitePress default theme labels, local search UI, Algolia search UI, and Ask AI UI strings.

| Language | Status | Language | Status |
| :--- | ---: | :--- | ---: |
| (en) English (source) | 100% | (ja) 日本語 | 100% |
| (de) Deutsch | 100% | (ko) 한국어 | 100% |
| (es) Español | 100% | (pt) Português | 100% |
| (fr) Français | 100% | (ru) Русский | 100% |
| (hu) Magyar | 100% | (zh) 简体中文 | 100% |
| (fa) فارسی | 100% | (ro) Română | 100% |
| (sr) Srpski | 100% | (sk) Slovenčina | 100% |
| (cs) Čeština | 100% |  |  |

- [Get started](#get-started)
- [Usage](#usage)
  - [Search translations](#search-translations)
  - [Overriding translations](#overriding-translations)
  - [Algolia search](#algolia-search)
  - [Custom locale keys](#custom-locale-keys)
  - [Raw language packs](#raw-language-packs)
- [Contributing](#contributing)

## Get started

Create a VitePress project:

```sh
npm create vitepress@latest
```

Install `vitepress-lang`:

```sh
npm install -D vitepress-lang
```

## Usage

Use `defineLangConfig()` inside `.vitepress/config.ts` to create translated VitePress locale configs.

Wrap your config with `withLangSearch()` to automatically register local search, Algolia search, and Ask AI translations for every configured locale.

```ts
import { defineConfig } from 'vitepress'
import { defineLangConfig, withLangSearch } from 'vitepress-lang'

export default defineConfig(
  withLangSearch({
    title: 'My Docs',

    locales: {
      root: defineLangConfig('en', {
        label: 'English',
        lang: 'en-US',
        title: 'My Docs',
        description: 'English documentation',
        themeConfig: {
          nav: [{ text: 'Home', link: '/' }]
        }
      }),

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
)
```

`defineLangConfig()` deep-merges the built-in language pack with your own VitePress locale config and translation overrides.

`withLangSearch()` reads your configured locales and writes the translated search UI strings to the VitePress search configuration.

## Search translations

VitePress expects search translations in the root `themeConfig.search.options.locales` config, not inside each locale object.

`withLangSearch()` handles this automatically.

For local search, this is generated for each configured locale:

```ts
themeConfig: {
  search: {
    provider: 'local',
    options: {
      locales: {
        root: {
          translations: {
            // English local search translations
          }
        },
        de: {
          translations: {
            // German local search translations
          }
        },
        hu: {
          translations: {
            // Hungarian local search translations
          }
        }
      }
    }
  }
}
```

You usually do not need to write this manually. Just wrap your VitePress config with `withLangSearch()`.

## Overriding translations

You can override any translated VitePress default theme value by passing your own `themeConfig` values to `defineLangConfig()`.

```ts
de: defineLangConfig('de', {
  themeConfig: {
    docFooter: {
      prev: '<<< Zurück',
      next: 'Weiter >>>'
    },
    outline: {
      label: 'Inhalt'
    },
    returnToTopLabel: 'Nach oben'
  }
})
```

Search translations can also be overridden inside `defineLangConfig()`.

For local search:

```ts
de: defineLangConfig('de', {
  search: {
    local: {
      translations: {
        button: {
          buttonText: 'Suchen',
          buttonAriaLabel: 'Suche öffnen'
        },
        modal: {
          noResultsText: 'Keine Treffer für',
          footer: {
            closeText: 'Schließen'
          }
        }
      }
    }
  }
})
```

For Algolia search:

```ts
de: defineLangConfig('de', {
  search: {
    algolia: {
      translations: {
        button: {
          buttonText: 'Suchen',
          buttonAriaLabel: 'Suche öffnen'
        },
        modal: {
          searchBox: {
            placeholderText: 'Dokumentation durchsuchen',
            searchInputLabel: 'Suche'
          },
          noResultsScreen: {
            noResultsText: 'Keine Ergebnisse gefunden für'
          }
        }
      }
    }
  }
})
```

For Ask AI:

```ts
de: defineLangConfig('de', {
  search: {
    askAi: {
      sidePanel: {
        button: {
          translations: {
            buttonText: 'KI fragen',
            buttonAriaLabel: 'KI fragen'
          }
        },
        panel: {
          translations: {
            header: {
              title: 'KI fragen'
            },
            promptForm: {
              promptPlaceholderText: 'Stelle eine Frage'
            }
          }
        }
      }
    }
  }
})
```

Overrides are deep-merged with the built-in language pack, so you only need to provide the values you want to change.

If an override is set to `undefined`, the generated VitePress config will omit that value and let VitePress or the search provider use its own default.

```ts
de: defineLangConfig('de', {
  search: {
    algolia: {
      translations: {
        modal: {
          searchBox: {
            placeholderText: undefined
          }
        }
      }
    }
  }
})
```

For project-specific content such as navigation, sidebar, footer copyright, or Algolia credentials, use normal VitePress config values.

## Algolia search

Local search is used by default.

For Algolia, set the VitePress search provider to `algolia`. `withLangSearch()` will automatically register Algolia and Ask AI translations for every configured locale.

```ts
import { defineConfig } from 'vitepress'
import { defineLangConfig, withLangSearch } from 'vitepress-lang'

export default defineConfig(
  withLangSearch({
    title: 'My Docs',

    themeConfig: {
      search: {
        provider: 'algolia',
        options: {
          appId: 'YOUR_APP_ID',
          apiKey: 'YOUR_SEARCH_API_KEY',
          indexName: 'YOUR_INDEX_NAME'
        }
      }
    },

    locales: {
      root: defineLangConfig('en', {
        label: 'English',
        lang: 'en-US',
        title: 'My Docs'
      }),

      de: defineLangConfig('de', {
        title: 'Meine Dokumentation'
      }),

      hu: defineLangConfig('hu', {
        title: 'Dokumentáció'
      })
    }
  })
)
```

For Algolia, `withLangSearch()` generates locale-specific `translations` and `askAi.sidePanel` config under `themeConfig.search.options.locales`.

You can also force the search provider explicitly:

```ts
export default defineConfig(
  withLangSearch(
    {
      title: 'My Docs',

      locales: {
        root: defineLangConfig('en'),
        de: defineLangConfig('de')
      }
    },
    {
      searchProvider: 'algolia'
    }
  )
)
```

## Custom locale keys

Your VitePress locale key does not have to match the language code.

For example, a `root` locale can use the English language pack:

```ts
root: defineLangConfig('en', {
  label: '',
  lang: 'en-US',
  link: '/',
  title: 'My Docs'
})
```

Because the language pack is created with `defineLangConfig('en')`, `withLangSearch()` can automatically detect that the `root` locale should use English search translations.

If you use plain VitePress locale objects instead of `defineLangConfig()`, provide a `localeMap`:

```ts
export default defineConfig(
  withLangSearch(
    {
      locales: {
        root: {
          label: 'English',
          lang: 'en-US',
          title: 'My Docs'
        },

        customGermanKey: defineLangConfig('de', {
          title: 'Meine Dokumentation'
        })
      }
    },
    {
      localeMap: {
        root: 'en',
        customGermanKey: 'de'
      }
    }
  )
)
```

## Raw language packs

It is also possible to access the raw language data, allowing you to work with it before use.

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

Copyright (C) 2020—present [Zoltán Rózsa](https://github.com/rozsazoltan)
