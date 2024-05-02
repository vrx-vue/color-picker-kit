# 自定义样式

## 示例

从零开始简易实现一个类 TDesign 的颜色选择器面板

<script setup lang="ts">
import CustomColorPicker from '/demos/CustomColorPicker/index.vue'

</script>

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
    <CustomColorPicker class="bg-$vp-c-bg"/>
</div>

::: code-group

<<< @/demos/CustomColorPicker/index.vue#component{vue}
<<< @/demos/CustomColorPicker/index.scss#style{scss}

:::
