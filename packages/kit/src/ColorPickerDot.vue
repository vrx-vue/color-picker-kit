<script setup lang="ts">
  import { IProps } from './types'
  import { cssClassPrefix } from './utils/cssClassPrefix'

  defineOptions({
    name: 'VrxColorPickerDot',
  })

  const props = withDefaults(
    defineProps<
      IProps<{
        /**
         * 是否禁用
         */
        disabled?: boolean
      }>
    >(),
    { disabled: false }
  )

  const classPrefix = cssClassPrefix(props.prefix)
</script>
<template>
  <div :class="[`${classPrefix}-dot`, { [`${classPrefix}-disabled`]: disabled }]" />
</template>
