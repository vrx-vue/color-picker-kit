<script setup lang="ts">
  import { ref } from 'vue'
  import {
    HSVA,
    HSVColorAlphaSlider,
    HSVColorBlock,
    HSVColorGradientSlider,
    HSVColorPalette,
    tinyColor,
  } from '@vrx/color-picker-kit'

  const initColor = () => {
    const v = tinyColor('#43E97B', { format: 'hex' }).toHsv()

    return {
      ...v,
      s: v.s * 100,
      v: v.v * 100,
    }
  }

  const color = ref<HSVA>(initColor())

  const handleChange = (e: HSVA) => {
    color.value = e
  }
</script>
<template>
  <div class="vrx-color-picker">
    <HSVColorPalette class="vrx-color-picker-palette" :color @change="handleChange" />
    <div class="vrx-color-picker-control-wrapper">
      <div class="vrx-color-picker-slider-group">
        <HSVColorGradientSlider class="vrx-color-picker-hue-slider" :color @change="handleChange" />
        <HSVColorAlphaSlider class="vrx-color-picker-alpha-slider" :color @change="handleChange" />
      </div>
      <HSVColorBlock :color class="vrx-color-picker-preview" />
    </div>
  </div>
</template>
