import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import UnoCss from 'unocss/vite'
import pkg from '../package.json'
import { pwa } from './pwa'

export default withPwa(
  defineConfig({
    title: 'color-picker-kit',
    lang: 'zh-CN',
    base: '/color-picker-kit/',
    lastUpdated: true,
    vite: {
      server: { port: 3002, host: true },
      plugins: [UnoCss()],
    },
    description: 'HSV 风格颜色选择器快速成型工具',
    themeConfig: {
      logo: '/icon.svg',
      lastUpdatedText: '最后更新时间',
      socialLinks: [{ link: 'https://github.com/vrx-vue/color-picker-kit', icon: 'github' }],
      outline: {
        label: '本页',
      },
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '暗色模式',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present WhiteKite',
      },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },
      nav: [
        {
          text: '指引',
          activeMatch: '^/guide/',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '简易实现', link: '/guide/simple-demo' },
            { text: '名词解释', link: '/guide/glossary' },
          ],
        },
        {
          text: '样式',
          activeMatch: '^/theme/',
          items: [
            {
              text: '默认样式',
              link: '/theme/',
            },
            {
              text: '扩展默认样式',
              link: '/theme/expand',
            },
            {
              text: '自定义样式',
              link: '/theme/custom',
            },
          ],
        },
        {
          text: '组件',
          link: '/components/HSVColorPalette',
          activeMatch: '^/components/',
        },
        {
          text: pkg.version,
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vrx-vue/color-picker-kit/blob/main/CHANGELOG.md',
            },
          ],
        },
      ],
      sidebar: [
        {
          text: '指引',
          items: [
            { text: '快速开始', link: '/guide/' },
            { text: '简易实现', link: '/guide/simple-demo' },
            { text: '名词解释', link: '/guide/glossary' },
          ],
        },
        {
          text: '样式',
          items: [
            {
              text: '默认样式',
              link: '/theme/',
            },
            {
              text: '扩展默认样式',
              link: '/theme/expand',
            },
            {
              text: '自定义样式',
              link: '/theme/custom',
            },
          ],
        },
        {
          text: '组件',
          items: [
            {
              text: 'HSVColorPalette',
              link: '/components/HSVColorPalette',
            },
            {
              text: 'HSVColorGradientSlider',
              link: '/components/HSVColorGradientSlider',
            },
            {
              text: 'HSVColorAlphaSlider',
              link: '/components/HSVColorAlphaSlider',
            },
            {
              text: 'HSVColorSlider',
              link: '/components/HSVColorSlider',
            },
            {
              text: 'ColorBlock',
              link: '/components/ColorBlock',
            },
            {
              text: 'ColorPickerDot',
              link: '/components/ColorPickerDot',
            },
          ],
        },
      ],
    },
    head: [
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'author', content: 'WhiteKite' }],
      [
        'link',
        {
          rel: 'icon',
          href: '/color-picker-kit/favicon.ico',
          sizes: 'any',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          href: '/color-picker-kit/icon.svg',
          type: 'image/svg+xml',
        },
      ],
      [
        'link',
        {
          rel: 'apple-touch-icon',
          href: '/color-picker-kit/apple-touch-icon-180x180.png',
        },
      ],
    ],
    pwa,
  })
)
