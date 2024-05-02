# HSVColorGradientSlider

HSV 中调整 `Hue` 调色板

<script setup lang="ts">
import { ref } from 'vue'
import {
  HSVColorGradientSlider,
  tinyColor
} from '@vrx/color-picker-kit'
import meta from '../meta.json'

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

<div class="bg-$vp-c-brand-1 rounded-md p-40px flex-1 min-h-0 flex justify-center items-center shadow mt-10px">
  <HSVColorGradientSlider class="w-260px" :color @change="handleChange" />
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
    <tr v-for="item in meta.HSVColorGradientSlider.props">
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

`event`

<table class="w-full">
  <thead>
    <tr>
      <th>参数名</th>
      <th>描述</th>
      <th>类型</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in meta.HSVColorGradientSlider.events">
      <td>{{item.name}}</td>
      <td>{{item.desc}}</td>
      <td>
        <span class="color-$vp-c-brand-1">
          {{item.type}}
        </span>
      </td>
    </tr>
  </tbody>
</table>
