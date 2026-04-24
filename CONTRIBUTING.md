# Contributing

Thank you for helping improve `vitepress-lang`.

This project keeps each language in its own folder under `src/locales`.

## Requirements

> [!NOTE]
> Using [jdx/mise](https://mise.jdx.dev) version manager is recommended for local development.
> It installs the required toolchain defined by the project and enables the same workflow used by maintainers.
>
> ```sh
> mise install
> hk install
> ```
>
> After `hk install`, pre-commit hooks will run checks automatically before each commit.
>
> The project is built using the experimental [aube](https://aube.en.dev) package manager, and the lock file is tied to it. If you'd like to try it out, you can use it instead of npm:
>
> ```sh
> aube install
> ```

If you do not use `mise`, install dependencies manually:

```sh
npm install
````

Then run checks manually before opening a pull request:

```sh
npm run lint
npm run typecheck
npm run build
```

Without `hk`, pre-commit checks will not run automatically, so make sure to run the commands above yourself.

## Add a new language

1. Fork the repository.

2. Create a new branch:

  ```sh
  git checkout -b feat/fr-language
  ```

3. Add a new folder under `src/locales`.

Example:

  ```txt
  src/locales/fr/
  ```

4. Copy the files from an existing locale folder:

  ```txt
  theme.ts
  local-search.ts
  algolia-search.ts
  ask-ai.ts
  index.ts
  // ...
  ```

5. Translate every string.

6. Add the new locale code to `SupportedLocale` in `src/types.ts`.

Example:

  ```ts
  export type SupportedLocale = 'en' | 'de' | 'hu' | /* ... */ | 'fr'
  ```

7. Export the locale from `src/locales/index.ts`.

  Example:

  ```ts
  export { fr } from './fr'
  ```

8. Add a subpath export to `package.json` if the language should be directly importable.

  Example:

  ```json
  "./fr": {
    "types": "./dist/locales/fr/index.d.ts",
    "import": "./dist/fr.js"
  }
  ```

9. Run checks:

  ```sh
  npm run lint
  npm run typecheck
  npm run build
  ```

10. Commit your changes with a Conventional Commit message:

  ```sh
  git commit -m "feat(fr): add French translations"
  ```

11. Push your branch:

  ```sh
  git push origin feat/fr-language
  ```

12. Open a pull request.

Suggested PR title:

  ```txt
  feat(fr): add French translations
  ```

Please mention whether the translation is native-reviewed, machine-assisted, or partially reviewed.

## Update an existing language

1. Fork the repository.

2. Create a new branch:

  ```sh
  git checkout -b fix/de-translations
  ```

3. Edit the relevant files under:

  ```txt
  src/locales/<locale>/
  ```

4. Run checks:

  ```sh
  npm run lint
  npm run typecheck
  npm run build
  ```

5. Commit your changes:

```sh
git commit -m "fix(de): improve German translations"
```

6. Push your branch:

```sh
git push origin fix/de-translations
```

7. Open a pull request.

Suggested PR title:

```txt
fix(de): improve German translations
```

## Pull request checklist

Before submitting a PR, make sure:

* every string is translated
* no generated `dist/` files are committed unless the project explicitly requires it
* `npm run lint` passes
* `npm run typecheck` passes
* `npm run build` passes
* the PR title follows Conventional Commits

## Commit examples

```txt
feat(fr): add French translations
fix(hu): improve Hungarian search labels
docs(readme): update VitePress usage example
chore(build): update package exports
```
