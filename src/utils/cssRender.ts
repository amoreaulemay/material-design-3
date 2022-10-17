import {css, CSSResult, unsafeCSS} from 'lit'
import {camelCaseToKebab} from './camelCaseToKebab'
import {AlphaColor, Colors, DynamicAlphaColor, Palette} from './types'

export const cssRender = (obj: Palette | Colors, prefix: string): CSSResult => {
  const linesLight: string[] = []
  const linesDark: string[] = []

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'function' && key !== 'css') {
      linesLight.push(`${prefix}-${camelCaseToKebab(key)}: ${(obj[key] as AlphaColor)()};`)
    } else if (typeof obj[key] === 'object' && key !== 'css') {
      linesLight.push(`${prefix}-${camelCaseToKebab(key)}: ${(obj[key] as DynamicAlphaColor).light()};`)
      linesDark.push(`${prefix}-${camelCaseToKebab(key)}: ${(obj[key] as DynamicAlphaColor).dark()};`)
    }
  }

  if (linesDark.length === 0) {
    return css`
      :host {
        ${unsafeCSS(linesLight.join(''))}
      }
    `
  } else {
    return css`
      :host {
        ${unsafeCSS(linesLight.join(''))}
      }

      @media (prefers-color-scheme: dark) {
        :host {
          ${unsafeCSS(linesDark.join(''))}
        }
      }
    `
  }
}
