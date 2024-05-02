<script lang="ts" setup>
import { VPTeamMembers } from 'vitepress/theme'
import { giteeIcon } from '../../gitee-icon'

const members = [
  {
    avatar:
        'https://foruda.gitee.com/avatar/1677119722694555626/8211287_white-kite_1660498418.png',
    name: 'WhiteKite',
    title: 'Author',
    desc: '希儿天下第一',
    links: [
      {
        icon: {
          svg: giteeIcon,
        },
        link: 'https://gitee.com/white-kite',
      },
    ],
  },
]
</script>

<template>
  <VPTeamMembers class="mt-20px" size="small" :members="members" />
</template>
