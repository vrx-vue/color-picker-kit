import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import Layout from './CustomLayout.vue'
import '@shikijs/vitepress-twoslash/style.css'
import 'uno.css'
import './style/style.css'
import '../../demos/ColorPicker/index.scss'
import '../../demos/AntColorPicker/index.scss'
import '../../demos/CustomColorPicker/index.scss'
import '../../demos/SimpleColorPicker/index.scss'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(TwoslashFloatingVue)
  },
} as Theme
