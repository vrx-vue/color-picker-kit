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
  <div class="t-color-picker">
    <HSVColorPalette prefix="t-color-picker" :color :disabled @change="handleChange" />
    <div class="t-color-picker-control-wrapper">
      <div class="t-color-picker-slider-group">
        <HSVColorGradientSlider prefix="t-color-picker" :color :disabled @change="handleChange" />
        <HSVColorAlphaSlider prefix="t-color-picker" :color :disabled @change="handleChange" />
      </div>
      <HSVColorBlock prefix="t-color-picker" :color :disabled />
    </div>
  </div>
</template>
