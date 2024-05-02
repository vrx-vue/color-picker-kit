import { defineConfig } from '@vrx/cp'
import { vrxPlugin } from '../../build/meta'

export default defineConfig({
  bundle: true,
  formatExt: { cjs: '.cjs', mjs: '.js' },
  docs: {
    webTypes: false,
    globalComponentDts: false,
  },
  plugins: [vrxPlugin()],
})
