import { resolve } from 'node:path'
import { createPlugin } from '@vrx/cp'

import { writeJSON } from 'void-fs'

const defaults = {
  value: '0',
  disabled: 'false',
}

const get_defaults = (k: string, v: any) => {
  if (v.type?.includes('undefined')) return defaults[k] || v.default
  return '必填'
}

export const vrxPlugin = createPlugin(() => {
  return {
    name: 'vrx-cp:color-picker-kit',
    async buildEnd(config) {
      const data: Record<string, any> = {}
      config.genDoc.docs.forEach((item) => {
        if (/^[a-z]/.test(item.name)) {
          return
        }
        data[item.name] = {
          props: Object.entries(item.props).map(([k, v]) => ({
            ...v,
            name: k,
            type: v.type?.replace('| null', '').replace('| undefined', ''),
            default: get_defaults(k, v),
          })),
          events: Object.entries(item.events).map(([k, v]) => ({
            ...v,
            name: k,
            type: v.type?.replace('| null', '').replace('| undefined', ''),
            desc: '值修改事件',
          })),
        }
      })

      const dirname = resolve(import.meta.dirname, '..', '..', 'docs')
      await writeJSON('meta.json', data, { cwd: dirname })
    },
  }
})
