# 简易使用

简易实现一个类 Arco Design 的 颜色选择器面板

<script setup lang="ts">
import SimpleColorPicker from '/demos/SimpleColorPicker/index.vue'

</script>

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
    <SimpleColorPicker class="bg-$vp-c-bg"/>
</div>

::: code-group

<<< @/demos/SimpleColorPicker/index.vue#component{vue}
<<< @/demos/SimpleColorPicker/index.scss#style{scss}

:::
