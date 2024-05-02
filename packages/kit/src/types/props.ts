import type { HSVA } from '@ctrl/tinycolor'

export interface BaseProps {
  /**
   * css class 前缀
   * @default vrx-color-picker
   */
  prefix?: string
}

export type IProps<T> = BaseProps & T

export interface BaseHSVProps extends BaseProps {
  /**
   * 颜色
   */
  color: HSVA
}

export type IHsvProps<T> = BaseHSVProps & T
