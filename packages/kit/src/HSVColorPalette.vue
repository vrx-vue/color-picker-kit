<script setup lang="ts">
  import { HSVA, TinyColor } from '@ctrl/tinycolor'
  import { StyleValue, computed } from 'vue'
  import ColorPickerDot from './ColorPickerDot.vue'
  import { useColorPaletteDrag } from './hooks/useColorPaletteDrag'
  import { cssClassPrefix } from './utils/cssClassPrefix'
  import { IHsvProps } from './types'

  /**
   * 饱和度调整
   */
  defineOptions({
    name: 'VrxHSVColorPalette',
  })

  const {
    disabled = false,
    color,
    prefix,
  } = defineProps<
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

  const backgroundColor = computed(() =>
    new TinyColor({ h: color.h, s: 100, v: 100 }).toRgbString()
  )

  const { containerRef, dragStart, dragEnd, touchmove } = useColorPaletteDrag(
    () => [color.s as number, color.v as number],
    (e) => emit('change', { ...color, s: e[0], v: e[1] }),
    () => disabled
  )

  const classPrefix = cssClassPrefix(prefix)
</script>
<template>
  <div
    ref="containerRef"
    :class="[`${classPrefix}-palette`, { [`${classPrefix}-disabled`]: disabled }]"
    :style="{ backgroundColor }"
    @mousedown="dragStart"
    @touchmove="touchmove"
    @touchend="dragEnd"
  >
    <ColorPickerDot
      :class="[`${classPrefix}-palette-dot`, dotClass]"
      :prefix
      :style="[
        {
          left: color.s + '%',
          top: 100 - (color.v as number) + '%',
        },
        dotStyle,
      ]"
      :disabled
    />
  </div>
</template>
