<script setup lang="ts">
  import { withBase } from 'vitepress'

  defineProps<{ subtitle: string; title: string; href: string }>()
</script>
<template>
  <div class="flex flex-col">
    <div class="mb-10px font-bold">
      <div class="color-$vp-c-brand-1">{{ subtitle }}</div>
      <a
        :href="withBase(href)"
        class="hover:underline hover:underline-$vp-c-brand-3 active:color-$vp-c-brand-3"
        >{{ title }}</a
      >
    </div>
    <div
      class="bg-$vp-c-brand-1 rounded-lg p-40px flex-1 min-h-0 flex justify-center items-center shadow"
    >
      <slot />
    </div>
  </div>
</template>
