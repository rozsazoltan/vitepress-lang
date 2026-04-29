# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No additional changes have been introduced at this time.

## [0.3.0] - 2026-04-29

### Added

- Added complete locale packs for Czech, Persian, Japanese, Korean, Portuguese, Romanian, Russian, Serbian, Slovak, and Chinese
- Added localized footer messages for all supported languages
- Added strict TypeScript coverage for VitePress default theme, local search, Algolia search, and Ask AI translation keys
- Added `withLangSearch()` to automatically register search translations under `themeConfig.search.options.locales`
- Added support for overriding theme, local search, Algolia search, and Ask AI translations
- Added support for custom locale keys through `localeMap`

### Changed

- Improved `defineLangConfig()` to better separate locale config from internal search translation data

### Fixed

- Fixed local search translations not being applied automatically
- Fixed Algolia search translations not being applied automatically
- Fixed Ask AI side panel translations not being wired into the generated VitePress search config
- Fixed missing Ask AI side panel translation keys required by current DocSearch side panel types
- Fixed TypeScript compatibility issues caused by leaking package-local VitePress `UserConfig` types into consuming projects

## [0.2.0] - 2026-04-28

### Added

- Added French language ([#4](https://github.com/rozsazoltan/vitepress-lang/pull/4))
- Added Spanish language ([#4](https://github.com/rozsazoltan/vitepress-lang/pull/4))

### Changed

- Refined TypeScript types based on original VitePress and DocSearch definitions ([#4](https://github.com/rozsazoltan/vitepress-lang/pull/4))
- Improved import configuration for better consistency and stability ([#4](https://github.com/rozsazoltan/vitepress-lang/pull/4))
- Fixed grammar issues and polished existing language content ([#4](https://github.com/rozsazoltan/vitepress-lang/pull/4))

## [0.1.0] - 2026-04-24

### Added

- Everything!
- Added support for English language ([#2](https://github.com/rozsazoltan/vitepress-lang/pull/2))
- Added German language ([#2](https://github.com/rozsazoltan/vitepress-lang/pull/2))
- Added Hungarian language ([#2](https://github.com/rozsazoltan/vitepress-lang/pull/2))

[unreleased]: https://github.com/rozsazoltan/vitepress-lang/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/rozsazoltan/vitepress-lang/releases/tag/v0.3.0
[0.2.0]: https://github.com/rozsazoltan/vitepress-lang/releases/tag/v0.2.0
[0.1.0]: https://github.com/rozsazoltan/vitepress-lang/releases/tag/v0.1.0
