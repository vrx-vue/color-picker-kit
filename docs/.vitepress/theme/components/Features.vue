<script setup lang="ts">
  import {
    ColorBlock,
    ColorPickerDot,
    HSVColorAlphaSlider,
    HSVColorGradientSlider,
    HSVColorPalette,
    HSVColorSlider,
    tinyColor,
  } from '@vrx/color-picker-kit'
  import { ref } from 'vue'
  import ColorPicker from '../../../demos/ColorPicker/index.vue'
  import AntColorPicker from '../../../demos/AntColorPicker/index.vue'
  import FeaturesItem from './FeaturesItem.vue'

  const initColor = tinyColor('#43E97B').toHsv()
  const color = ref({
    ...initColor,
    s: initColor.s * 100,
    v: initColor.v * 100,
  })

  const handleChange = (e) => {
    color.value = e
  }
</script>
<template>
  <div class="w-full mt-20px p-10px" style="--vrx-color-picker-dot: var(--vp-c-bg)">
    <div class="grid grid-cols-2 max-sm:grid-cols-1 sm-lg:max-w-960px m-auto gap-20px">
      <FeaturesItem subtitle="示例：" title="Arco Design 风格" href="/theme/">
        <ColorPicker class="bg-$vp-c-bg" />
      </FeaturesItem>
      <FeaturesItem subtitle="示例：" title="Ant Design 风格" href="/theme/expand">
        <AntColorPicker class="bg-$vp-c-bg" />
      </FeaturesItem>
      <FeaturesItem subtitle="组件：" title="HSVColorPalette" href="/components/HSVColorPalette">
        <HSVColorPalette :color class="w-260px h-178px" @change="handleChange" />
      </FeaturesItem>
      <FeaturesItem
        subtitle="组件："
        title="HSVColorGradientSlider"
        href="/components/HSVColorGradientSlider"
      >
        <HSVColorGradientSlider :color class="w-260px" @change="handleChange" />
      </FeaturesItem>
      <FeaturesItem
        subtitle="组件："
        title="HSVColorAlphaSlider"
        href="/components/HSVColorAlphaSlider"
      >
        <HSVColorAlphaSlider :color class="w-260px" @change="handleChange" />
      </FeaturesItem>
      <FeaturesItem subtitle="组件：" title="HSVColorSlider" href="/components/HSVColorSlider">
        <HSVColorSlider
          :value="color.a * 100"
          color="#43E97B"
          class="w-260px"
          @change="(a) => handleChange({ ...color, a: a / 100 })"
        />
      </FeaturesItem>
      <FeaturesItem subtitle="组件：" title="ColorBlock" href="/components/ColorBlock">
        <ColorBlock class="w-40px min-h-40px" value="#43E97B" />
      </FeaturesItem>
      <FeaturesItem subtitle="组件：" title="ColorPickerDot" href="/components/ColorPickerDot">
        <div class="relative pb-16px">
          <ColorPickerDot />
        </div>
      </FeaturesItem>
    </div>
  </div>
</template>
