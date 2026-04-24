# Contributing

Languages live under:

```txt
src/locales/<locale>/
```

## Development setup

### Recommended: mise + hk

For local development, we recommend using the [jdx/mise](https://mise.jdx.dev) version manager. Installs the project toolchain and enables pre-commit checks.

```sh
# installs project tools (aube, hk, pkl)
mise install
# enables pre-commit hooks
hk install
```

The project uses the experimental [aube](https://aube.en.dev) package manager:

```sh
aube install
```

### Manual (without pre-commit hook)

```sh
npm install
```

Run checks manually before opening a PR:

```sh
npm run lint
npm run typecheck
npm run build
```

## Add a language

```sh
git checkout -b feat/fr
```

* create `src/locales/fr/`
* copy files from an existing locale
* translate everything
* add `'fr'` to `SupportedLocale`
* export in `src/locales/index.ts`

Then:

```sh
git commit -m "feat(fr): add French translations"
git push origin feat/fr
```

Open a PR.

## Update a language

```sh
git checkout -b fix/de
```

Edit:

```txt
src/locales/de/
```

Then:

```sh
git commit -m "fix(de): improve translations"
git push origin fix/de
```

Open a PR.

## Rules

* all strings translated
* build passes
* use Conventional Commits
* mention in PR if translation is machine-assisted or not native-reviewed
