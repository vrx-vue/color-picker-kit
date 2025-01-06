<script setup lang="ts">
  import { TinyColor } from '@ctrl/tinycolor'
  import { StyleValue, computed } from 'vue'
  import ColorBlock from './ColorBlock.vue'
  import { IHsvProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorBlock',
  })

  const {
    disabled = false,
    color,
    prefix,
  } = defineProps<
    IHsvProps<{
      /**
       * 内部颜色显示样式
       */
      innerClass?: any
      /**
       * 内部颜色显示样式
       */
      innerStyle?: StyleValue
      /**
       * 是否禁用
       */
      disabled?: boolean
    }>
  >()

  const value = computed(() => new TinyColor(color).toRgbString())

  const classPrefix = cssClassPrefix(prefix)
</script>
<template>
  <ColorBlock
    :value
    :prefix
    :class="{ [`${classPrefix}-disabled`]: disabled }"
    :innerClass
    :innerStyle
  />
</template>
