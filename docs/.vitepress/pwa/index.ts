import type { PwaOptions } from '@vite-pwa/vitepress'
import { icons } from './icons'

export const pwa: PwaOptions = {
  manifest: {
    name: 'Vrx Color Picker Kit',
    short_name: 'Vrx Color Picker',
    description: '用于快速组装HSV颜色选择器的工具',
    theme_color: '#43E97B',
    icons,
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
  },
}
