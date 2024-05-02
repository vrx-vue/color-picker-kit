<script setup lang="ts">
  import DefaultTheme from 'vitepress/theme'
  import TeamPage from './components/TeamPage.vue'
  import ReloadPrompt from './components/ReloadPrompt.vue'
  import Features from './components/Features.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-features-after>
      <Features />
      <TeamPage />
    </template>
    <template #layout-bottom>
      <ReloadPrompt />
    </template>
  </DefaultTheme.Layout>
</template>
