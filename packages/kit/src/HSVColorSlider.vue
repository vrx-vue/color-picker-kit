<script setup lang="ts">
  import { StyleValue } from 'vue'
  import ColorPickerDot from './ColorPickerDot.vue'
  import { useColorPaletteDrag } from './hooks/useColorPaletteDrag'
  import { IProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxHSVColorSlider',
  })

  const props = withDefaults(
    defineProps<
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
    >(),
    { value: 0, disabled: false }
  )

  const emit = defineEmits<{
    /**
     * 值修改事件
     */
    change: [e: number]
  }>()

  const { containerRef, dragStart } = useColorPaletteDrag(
    () => [props.value, 0],
    (e) => emit('change', e[0]),
    () => props.disabled
  )

  const classPrefix = cssClassPrefix(props.prefix)
</script>
<template>
  <div
    ref="containerRef"
    :class="[`${classPrefix}-slider`, { [`${classPrefix}-disabled`]: disabled }]"
    @mousedown="dragStart"
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
