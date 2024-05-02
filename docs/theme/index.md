# 默认样式

## 使用

::: code-group

```scss[scss]
@import '@vrx/color-picker-kit-style/scss/index.scss';
```

```css[css]
@import '@vrx/color-picker-kit-style/css/index.css';
```
:::

## 单独引入特定组件样式


::: code-group

```scss[scss]
@import '@vrx/color-picker-kit-style/scss/[组件名称]/style/index.scss';
```

```css[css]
@import '@vrx/color-picker-kit-style/css/[组件名称]/style/index.css';
```

:::


## 示例

通过默认样式简易实现一个类 Arco Design 的 颜色选择器面板

<script setup lang="ts">
import ColorPicker from '/demos/ColorPicker/index.vue'

</script>

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
    <ColorPicker class="bg-$vp-c-bg"/>
</div>

::: code-group

<<< @/demos/ColorPicker/index.vue#component{vue}
<<< @/demos/ColorPicker/index.scss#style{scss}

:::
