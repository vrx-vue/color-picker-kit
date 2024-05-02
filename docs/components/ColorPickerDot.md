# ColorPickerDot

拖拽操纵基础组件

<script setup lang="ts">
import { ref } from 'vue'
import {
  ColorPickerDot
} from '@vrx/color-picker-kit'
import meta from '../meta.json'
</script>

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
  <div class="relative pb-16px">
      <ColorPickerDot />
  </div>
</div>

## API

`props`

<table class="w-full">
  <thead>
    <tr>
      <th>参数名</th>
      <th>描述</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in meta.ColorPickerDot.props">
      <td>{{item.name}}</td>
      <td>{{item.desc}}</td>
      <td>
        <span class="color-$vp-c-brand-1">
          {{item.type}}
        </span>
      </td>
      <td>{{item.default}}</td>
    </tr>
  </tbody>
</table>
