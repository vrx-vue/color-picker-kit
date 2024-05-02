# 名词解释

## HSVA

项目内所有 hsva 的入参范围都为：

<table class="font-bold text-center">
  <thead>
    <tr>
      <th>HSVA</th>
      <th>取值范围</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>h</td>
      <td>0-360</td>
    </tr>
    <tr>
      <td>S</td>
      <td>0-100</td>
    </tr>
    <tr>
      <td>V</td>
      <td>0-100</td>
    </tr>
    <tr>
      <td>A</td>
      <td>0-1</td>
    </tr>
  </tbody>
</table>

## tinyColor

```ts{1,4}
import { tinyColor } from '@vrx/color-picker-kit'

const initColor = () => {
  const v = tinyColor('#43E97B', { format: 'hex' }).toHsv()

  return {
    ...v,
    s: v.s * 100,
    v: v.v * 100,
  }
}

const color = ref<HSVA>(initColor())
```

是一个颜色值解析与格式转换的包，详见 [文档](https://tinycolor.vercel.app/) 与 [GitHub](https://github.com/scttcper/tinycolor)

