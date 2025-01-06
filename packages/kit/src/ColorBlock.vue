<script setup lang="ts">
  import { StyleValue } from 'vue'
  import { cssClassPrefix } from './utils/cssClassPrefix'
  import { IProps } from './types'

  defineOptions({
    name: 'VrxColorBlock',
  })

  const { prefix } = defineProps<
    IProps<{
      /**
       * 颜色
       */
      value: string
      /**
       * 内部颜色显示样式
       */
      innerClass?: any
      /**
       * 内部颜色显示样式
       */
      innerStyle?: StyleValue
    }>
  >()

  const classPrefix = cssClassPrefix(prefix, 'block')
</script>
<template>
  <div :class="classPrefix">
    <div
      :class="[`${classPrefix}-inner`, innerClass]"
      :style="[{ backgroundColor: value }, innerStyle]"
    />
  </div>
</template>
