<script setup lang="ts">
  import { HSVA, TinyColor } from '@ctrl/tinycolor'
  import { StyleValue, computed } from 'vue'
  import HSVColorSlider from './HSVColorSlider.vue'
  import { IHsvProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorGradientSlider',
  })

  const props = defineProps<
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
    const color = new TinyColor({ h: props.color.h, s: 100, v: 100 }).toRgb()
    return `rgb(${color.r},${color.g},${color.b})`
  })

  const change = (e) => emit('change', { ...props.color, h: (e / 100) * 360 })

  const classPrefix = cssClassPrefix(props.prefix, 'gradient-slider')
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
