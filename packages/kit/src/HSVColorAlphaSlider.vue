<script setup lang="ts">
  import { HSVA, TinyColor } from '@ctrl/tinycolor'
  import { StyleValue, computed } from 'vue'
  import HSVColorSlider from './HSVColorSlider.vue'
  import { IHsvProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorAlphaSlider',
  })

  const props = defineProps<
    IHsvProps<{
      /**
       * 进度条样式
       */
      sliderClass?: any
      /**
       * 进度条样式
       */
      sliderStyle?: StyleValue
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

  const backgroundImage = computed(() => {
    const color = new TinyColor(props.color).toRgb()
    const colorStr = `${color.r},${color.g},${color.b}`
    return `linear-gradient(to right, rgba(${colorStr}, 0), rgb(${colorStr}))`
  })

  const rgbString = computed(() => {
    return new TinyColor(props.color).toRgbString()
  })

  const change = (e) => emit('change', { ...props.color, a: e / 100 })

  const classPrefix = cssClassPrefix(props.prefix, 'alpha-slider')
</script>
<template>
  <div :class="classPrefix">
    <HSVColorSlider
      :class="sliderClass"
      :value="color.a * 100"
      :disabled
      :style="[
        {
          backgroundImage,
        },
        sliderStyle,
      ]"
      :dotClass
      :dotStyle
      :prefix
      :color="rgbString"
      @change="change"
    />
  </div>
</template>
