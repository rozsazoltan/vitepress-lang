import { localePacks } from '../locales'
import type {
  PlainObject,
  SupportedLocale,
  VPi18nConfig
} from '../types'

function isPlainObject(value: unknown): value is PlainObject {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function deepMerge<T extends PlainObject>(base: T, override?: PlainObject): T {
  if (!override) return { ...base }

  const output: PlainObject = { ...base }

  for (const [key, value] of Object.entries(override)) {
    const current = output[key]

    if (isPlainObject(current) && isPlainObject(value)) {
      output[key] = deepMerge(current, value)
      continue
    }

    output[key] = value
  }

  return output as T
}

export function defineLangConfig(
  locale: SupportedLocale,
  override: Partial<VPi18nConfig> = {},
): VPi18nConfig {
  const config: VPi18nConfig = localePacks[locale]
  const merged = deepMerge(config, override)

  if (merged.themeConfig!.editLink!.pattern === 'UNDEFINED') {
    delete merged!.themeConfig!.editLink
  }

  return merged
}
