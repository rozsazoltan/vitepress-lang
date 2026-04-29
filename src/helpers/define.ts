import { localePacks } from '../locales'
import type {
  PlainObject,
  SupportedLocale,
  VPi18nConfig,
  VPi18nConfigOverride
} from '../types'

function isPlainObject(value: unknown): value is PlainObject {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function deepMerge<T extends object>(base: T, override?: Partial<T>): T {
  if (!override) return { ...base }

  const output: Record<string, unknown> = { ...base }

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
  override: VPi18nConfigOverride = {},
): VPi18nConfig {
  const config = localePacks[locale]
  const merged = deepMerge(config, override)

  if (merged.themeConfig?.editLink?.pattern === 'UNDEFINED') {
    delete merged.themeConfig.editLink
  }

  return merged
}
