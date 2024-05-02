# 快速开始

[![NPM Version](https://img.shields.io/npm/v/%40vrx%2Fcolor-picker-kit?style=flat-square)](https://www.npmjs.com/package/@vrx/color-picker-kit)

[![NPM Downloads](https://img.shields.io/npm/dm/%40vrx%2Fcolor-picker-kit?style=flat-square)](https://www.npmjs.com/package/@vrx/color-picker-kit)

[![NPM License](https://img.shields.io/npm/l/%40vrx%2Fcolor-picker-kit?style=flat-square)](https://www.npmjs.com/package/@vrx/color-picker-kit)

## 介绍

比起现成的功能丰富的 **HSV** 风格的 `<ColorPicker/>` 组件。

`color-picker-kit` 只实现 **HSV** 风格拖拽调色部分组件,其余功能交给使用者自行组装。

**打个不恰当的比方：**
- 如果说 `<ColorPicker/>` 组件 提供的是 `<ProLayout/>` 
- **color-picker-kit** 提供的就是 `<Layout/>`/`<Layout.Header/>`/`<Layout.Content/>`/`<Layout.Footer/>`

## color-picker-kit 与 X 不同的是

当下，越来越多的组件库，都内置了 **HSV** 风格的  `<ColorPicker/>` 颜色选择器组件，
可以使我们可以更方便的交付一个用户可以自定义主题色的项目

**例如：**[Arco Design](https://arco.design/vue/component/color-picker) [Ant Design](https://ant-design.antgroup.com/components/color-picker-cn) [TDesign](https://tdesign.tencent.com/vue-next/components/color-picker)

**X**
- [Ant Design](https://ant-design.antgroup.com/components/color-picker-cn) 并没有针对 vue 的实现版
- [Arco Design](https://arco.design/vue/component/color-picker) 的颜色选择器缺乏后续维护
- [TDesign](https://tdesign.tencent.com/vue-next/components/color-picker) 兼容性要求 `Chrome >= 84`，无法满足部分业务场景
- 在使用不包含 `<color-picker/>` 组件库的情况下，引入内置了 `<color-picker/>` 颜色选择器的组件库，存在一定的样式混搭处理问题，部分打包体积问题

**color-picker-kit**
- 仅实现 **HSV** 风格的拖拽调色部分组件，不提供完整功能的组件，只用于可以快速组成一个您自己的`<color-picker/>` 颜色选择器组件
- **组件**和**样式**默认分离封装，**样式**可以按照您的需要引入和覆盖
- **组件**包默认[摇树](https://developer.mozilla.org/zh-CN/docs/Glossary/Tree_shaking)无副作用,您也可以参考默认的样式，自行从零实现样式，自行决定样式兼容的浏览器目标

## 安装

::: code-group

```sh [npm]
npm i @vrx/color-picker-kit
```

```sh [yarn]
yarn add @vrx/color-picker-kit
```

```sh [pnpm]
pnpm add @vrx/color-picker-kit
```
```sh [bun]
bun add @vrx/color-picker-kit
```
:::

## 使用默认样式


::: code-group

```sh [npm]
npm i @vrx/color-picker-kit-style
```

```sh [yarn]
yarn add @vrx/color-picker-kit-style
```

```sh [pnpm]
pnpm add @vrx/color-picker-kit-style
```
```sh [bun]
bun add @vrx/color-picker-kit-style
```
:::

## 简易实现

[简易实现](/guide/simple-demo)


## 提示

> [!TIP] 封装时使用双向绑定的提示
> - 不建议您封装的时候将 `HSVA`格式化为`另一种格式值(例如：hex，rgba)`的时候,完全依赖于双向绑定赋值。
>
> - 遇到 `#000`,这种特殊颜色时，[tinyColor](/guide/glossary#tinyColor) 解析为 `hsv` 时会丢失部分信息,可能会导致拖拽色盘时出现闪烁的问题。
>
> - 如执意想要实现一个完全双向绑定监听的颜色选择器的话,需自行解决例如 `hex 转 hsv` 带来的信息丢失问题
