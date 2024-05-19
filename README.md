<img src="https://vrx-vue.github.io/color-picker-kit/icon.svg" width="200" height="300" style="display:block;margin:auto">

# @vrx/color-picker-kit
<!-- automd:badges color="green" license licenseBranch name="@vrx/color-picker-kit"  bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/@vrx/color-picker-kit?color=green)](https://npmjs.com/package/@vrx/color-picker-kit)
[![npm downloads](https://img.shields.io/npm/dm/@vrx/color-picker-kit?color=green)](https://npmjs.com/package/@vrx/color-picker-kit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@vrx/color-picker-kit?color=green)](https://bundlephobia.com/package/@vrx/color-picker-kit)
[![license](https://img.shields.io/github/license/vrx-vue/color-picker-kit?color=green)](https://github.com/vrx-vue/color-picker-kit/blob/true/LICENSE)

<!-- /automd -->

HSV 风格颜色选择器快速成型工具



## 安装

<!-- automd:pm-install name="@vrx/color-picker-kit" -->

```sh
# ✨ Auto-detect
npx nypm install @vrx/color-picker-kit

# npm
npm install @vrx/color-picker-kit

# yarn
yarn add @vrx/color-picker-kit

# pnpm
pnpm install @vrx/color-picker-kit

# bun
bun install @vrx/color-picker-kit
```

<!-- /automd -->

## 介绍

比起现成的功能丰富的 **HSV** 风格的 `<ColorPicker/>` 组件。

`color-picker-kit` 只实现 **HSV** 风格拖拽调色部分组件,其余功能交给使用者自行组装。

**打个不恰当的比方：**
- 如果说 `<ColorPicker/>` 组件 提供的是 `<ProLayout/>` 
- **color-picker-kit** 提供的就是 `<Layout/>`/`<Layout.Header/>`/`<Layout.Content/>`/`<Layout.Footer/>`

## 使用默认样式

<!-- automd:pm-install name="@vrx/color-picker-kit-style" -->

```sh
# ✨ Auto-detect
npx nypm install @vrx/color-picker-kit-style

# npm
npm install @vrx/color-picker-kit-style

# yarn
yarn add @vrx/color-picker-kit-style

# pnpm
pnpm install @vrx/color-picker-kit-style

# bun
bun install @vrx/color-picker-kit-style
```

<!-- /automd -->

## 示例

<!-- automd:file src="./docs/demos/ColorPicker/index.vue" code -->

```vue [index.vue]
// @noErrors
<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import {
    ColorFormats,
    HSVA,
    HSVColorAlphaSlider,
    HSVColorBlock,
    HSVColorGradientSlider,
    HSVColorPalette,
    tinyColor,
  } from '@vrx/color-picker-kit'

  const props = withDefaults(
    defineProps<{
      /**
       * 结果值格式化
       */
      format?: ColorFormats
      /**
       * 默认值
       */
      defaultValue?: string
      /**
       * 是否禁用
       */
      disabled?: boolean
    }>(),
    {
      format: 'hex',
      defaultValue: '#43E97B',
      disabled: false,
    }
  )

  /**
   * 双向绑定的值
   */
  const modelValue = defineModel<string>()

  const controlValue = computed(() => modelValue.value ?? props.defaultValue)

  const hsvValue = computed(() => {
    const v = tinyColor(controlValue.value, {
      format: props.format,
    }).toHsv()
    return {
      ...v,
      s: v.s * 100,
      v: v.v * 100,
    }
  })

  /**
   * 由于 hex 转 hsv 会丢失部分信息，导致拖拽时，色盘闪烁
   * 这边实现的不是完全的 双向绑定
   */
  const color = ref<HSVA>({
    h: hsvValue.value.h,
    s: hsvValue.value.s,
    v: hsvValue.value.v,
    a: hsvValue.value.a,
  })

  const handleChange = (e: HSVA) => {
    color.value = e
  }

  const formatValue = computed(() => {
    return tinyColor(color.value).toString(props.format)
  })

  watch(formatValue, (v) => {
    modelValue.value = v
  })
</script>
<template>
  <div class="vrx-color-picker">
    <HSVColorPalette class="vrx-color-picker-palette" :color :disabled @change="handleChange" />
    <div class="vrx-color-picker-control-wrapper">
      <div class="vrx-color-picker-slider-group">
        <HSVColorGradientSlider
          class="vrx-color-picker-hue-slider"
          :color
          :disabled
          @change="handleChange"
        />
        <HSVColorAlphaSlider
          class="vrx-color-picker-alpha-slider"
          :color
          :disabled
          @change="handleChange"
        />
      </div>
      <HSVColorBlock :color :disabled class="vrx-color-picker-preview" />
    </div>
  </div>
</template>

```

<!-- /automd -->

<!-- automd:file src="./docs/demos/ColorPicker/index.scss" code -->

```scss [index.scss]
$vrx-color-picker-border: var(--vp-c-bg-alt);
$vrx-color-picker-dot: var(--vp-c-bg);
$vrx-color-picker-block-size: 40px;
@import '@vrx/color-picker-kit-style/scss/index.scss';
.#{$prefix} {
  width: 260px;
  box-shadow: $vrx-color-picker-shadow;
  border-radius: $vrx-color-picker-block-rounded;
  .#{$prefix}-palette {
    height: 178px;
  }
  .#{$prefix}-control-wrapper {
    display: flex;
    padding: 10px;
  }
  .#{$prefix}-slider-group {
    flex: 1;
    min-width: 0;
    margin-right: 10px;
  }

  .#{$prefix}-hue-slider {
    margin-bottom: 10px;
  }
}

```

<!-- /automd -->

## 贡献者
<!-- automd:contributors author="Colourlessglow" license="MIT" -->

Published under the [MIT](https://github.com/vrx-vue/color-picker-kit/blob/main/LICENSE) license.
Made by [@Colourlessglow](https://github.com/Colourlessglow) and [community](https://github.com/vrx-vue/color-picker-kit/graphs/contributors) 💛
<br><br>
<a href="https://github.com/vrx-vue/color-picker-kit/graphs/contributors">
<img src="https://contrib.rocks/image?repo=vrx-vue/color-picker-kit" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->

