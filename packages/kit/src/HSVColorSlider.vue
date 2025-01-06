<script setup lang="ts">
  import { StyleValue } from 'vue'
  import ColorPickerDot from './ColorPickerDot.vue'
  import { useColorPaletteDrag } from './hooks/useColorPaletteDrag'
  import { IProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorSlider',
  })

  const {
    value = 0,
    disabled = false,
    prefix,
  } = defineProps<
    IProps<{
      /**
       * 百分比
       */
      value?: number
      /**
       * 背景色
       */
      color: string
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
    change: [e: number]
  }>()

  const { containerRef, dragStart, dragEnd, touchmove } = useColorPaletteDrag(
    () => [value, 0],
    (e) => emit('change', e[0]),
    () => disabled
  )

  const classPrefix = cssClassPrefix(prefix)
</script>
<template>
  <div
    ref="containerRef"
    :class="[`${classPrefix}-slider`, { [`${classPrefix}-disabled`]: disabled }]"
    @mousedown="dragStart"
    @touchmove="touchmove"
    @touchend="dragEnd"
  >
    <ColorPickerDot
      :class="[`${classPrefix}-slider-dot`, dotClass]"
      role="slider"
      :disabled
      :prefix
      :style="[{ left: value + '%', backgroundColor: color }, dotStyle]"
    />
  </div>
</template>
