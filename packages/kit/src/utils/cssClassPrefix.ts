export const cssClassPrefix = (prefix?: string, c?: string) => {
  const _prefix = prefix || 'vrx-color-picker'
  return c ? `${_prefix}-${c}` : _prefix
}
