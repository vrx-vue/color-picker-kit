import type { PwaOptions } from '@vite-pwa/vitepress'
import { icons } from './icons'

export const pwa: PwaOptions = {
  manifest: {
    name: 'Vrx Arco',
    short_name: 'Vrx Arco',
    description: '对arco-design-vue 的pro预设的封装',
    theme_color: '#43E97B',
    icons,
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
  },
}
