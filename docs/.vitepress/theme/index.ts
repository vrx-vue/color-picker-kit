import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './CustomLayout.vue'
import 'uno.css'
import './style/style.css'
import '../../demos/ColorPicker/index.scss'
import '../../demos/AntColorPicker/index.scss'
import '../../demos/CustomColorPicker/index.scss'
import '../../demos/SimpleColorPicker/index.scss'

export default {
  extends: DefaultTheme,
  Layout,
} as Theme
