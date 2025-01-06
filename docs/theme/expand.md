# 扩展默认样式

## 使用

::: code-group

```scss[scss]
@use '@vrx/color-picker-kit-style/scss/index.scss' as kit;
```

```css[css]
@import '@vrx/color-picker-kit-style/css/index.css';
```
:::

## 单独引入特定组件样式


::: code-group

```scss[scss]
@use '@vrx/color-picker-kit-style/scss/[组件名称]/style/index.scss' as *;
```

```css[css]
@import '@vrx/color-picker-kit-style/css/[组件名称]/style/index.css';
```

:::


## 覆盖内置变量

> 推荐使用 `scss` 覆盖，可覆盖的选项更多

::: code-group

<<< @/node_modules/@vrx/color-picker-kit-style/scss/variables.scss[scss]

```css[css]
:root {
  // 拖拽组件颜色
  --vrx-color-picker-dot : #fff;
  // 颜色展示组件的圆角
  --vrx-color-picker-block-rounded : 2px;
  // 默认阴影颜色
  --vrx-color-picker-border: #e2e2e2;
}
```

```vue[vue]
// @noErrors
<script lang="ts" setup>
  import { HSVColorPalette } from '@vrx/color-picker-kit'
</script>
<template>
  <!-- 或任意组件 -->
  <HSVColorPalette prefix="ant-color-picker" />
  <!-- 为内部 css class 替换前缀 -->
</template>
```

:::


## 示例

通过覆盖默认样式简易实现一个类 Ant Design 的 颜色选择器面板

<script setup lang="ts">
import AntColorPicker from '/demos/AntColorPicker/index.vue'

</script>

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
    <AntColorPicker class="bg-$vp-c-bg"/>
</div>

::: code-group

<<< @/demos/AntColorPicker/index.vue#component{vue}
<<< @/demos/AntColorPicker/index.scss#style{scss}

:::
