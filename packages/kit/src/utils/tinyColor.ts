import { type ColorInput, TinyColor, type TinyColorOptions } from '@ctrl/tinycolor'

export function tinyColor(color?: ColorInput, opts?: Partial<TinyColorOptions>) {
  return new TinyColor(color, opts)
}
