<script setup lang="ts">
  import { HSVA, TinyColor } from '@ctrl/tinycolor'
  import { StyleValue, computed } from 'vue'
  import HSVColorSlider from './HSVColorSlider.vue'
  import { IHsvProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorGradientSlider',
  })

  const { color, prefix } = defineProps<
    IHsvProps<{
      /**
       * 操作组件样式
       */
      dotClass?: any
      /**
       * 操作组件样式
       */
      dotStyle?: StyleValue
      /**
       * 是否禁用
       */
      disabled?: boolean
    }>
  >()

  const emit = defineEmits<{
    /**
     * 值修改事件
     */
    change: [e: HSVA]
  }>()

  const rgbString = computed(() => {
    const _color = new TinyColor({ h: color.h, s: 100, v: 100 }).toRgb()
    return `rgb(${_color.r},${_color.g},${_color.b})`
  })

  const change = (e) => emit('change', { ...color, h: (e / 100) * 360 })

  const classPrefix = cssClassPrefix(prefix, 'gradient-slider')
</script>
<template>
  <HSVColorSlider
    :value="((color.h as number) / 360) * 100"
    :class="classPrefix"
    :color="rgbString"
    :disabled
    :dotClass
    :dotStyle
    :prefix
    @change="change"
  />
</template>
