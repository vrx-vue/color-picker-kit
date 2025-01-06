<script setup lang="ts">
  import { IProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxColorPickerDot',
  })

  const { prefix, disabled = false } = defineProps<
    IProps<{
      /**
       * 是否禁用
       */
      disabled?: boolean
    }>
  >()

  const classPrefix = cssClassPrefix(prefix)
</script>
<template>
  <div :class="[`${classPrefix}-dot`, { [`${classPrefix}-disabled`]: disabled }]" />
</template>
