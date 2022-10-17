import {CSSResult} from 'lit'

type CSSRender = () => CSSResult
export type AlphaColor = (opacity?: number) => CSSResult
export type DynamicAlphaColor = {light: AlphaColor; dark: AlphaColor}
export const css = Symbol('css')

export type Palette = {
  [css]: CSSRender
  [p: string]: AlphaColor
}

export type Colors = {
  [css]: CSSRender
  [p: string]: DynamicAlphaColor
}
