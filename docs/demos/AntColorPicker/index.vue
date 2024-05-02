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
  <div class="ant-color-picker">
    <HSVColorPalette
      class="ant-color-picker-palette"
      prefix="ant-color-picker"
      :color
      :disabled
      @change="handleChange"
    />
    <div class="ant-color-picker-control-wrapper">
      <div class="ant-color-picker-slider-group">
        <HSVColorGradientSlider
          class="ant-color-picker-hue-slider"
          :color
          :disabled
          prefix="ant-color-picker"
          @change="handleChange"
        />
        <HSVColorAlphaSlider
          class="ant-color-picker-alpha-slider"
          :color
          :disabled
          prefix="ant-color-picker"
          @change="handleChange"
        />
      </div>
      <HSVColorBlock :color :disabled prefix="ant-color-picker" class="ant-color-picker-preview" />
    </div>
  </div>
</template>
