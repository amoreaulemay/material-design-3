import {useLayoutEffect} from 'haunted'
import {CSSResult} from 'lit'
import {supportsAdoptingStyleSheets} from 'lit-element'

declare type CustomWindow = typeof window & {ShadyCSS: any}

export function useStyles(el: HTMLElement, styles: CSSResult[]) {
  /**
   * Applies styling to the element shadowRoot using the [[`styles`]]
   * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
   * available and will fall back otherwise. When Shadow DOM is polyfilled,
   * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
   * is available but `adoptedStyleSheets` is not, styles are appended to the
   * end of the `shadowRoot` to [mimic spec
   * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
   */
  const adoptStyles = (el: HTMLElement) => {
    if (styles.length === 0) {
      return
    }
    // There are three separate cases here based on Shadow DOM support.
    // (1) shadowRoot polyfilled: use ShadyCSS
    // (2) shadowRoot.adoptedStyleSheets available: use it
    // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
    // rendering
    if ((window as CustomWindow).ShadyCSS && !(window as CustomWindow).ShadyCSS.nativeShadow) {
      ;(window as CustomWindow).ShadyCSS.ScopingShim.prepareAdoptedCssText(
        styles.map((s) => s.cssText),
        el.localName
      )
    } else if (supportsAdoptingStyleSheets) {
      // @ts-ignore
      el.shadowRoot.adoptedStyleSheets = styles.map((s) => (s instanceof CSSStyleSheet ? s : s.styleSheet))
    } else {
      styles.forEach((s) => {
        const style = document.createElement('style')
        style.textContent = s.cssText
        el.shadowRoot?.appendChild(style)
      })
    }
  }

  useLayoutEffect(() => {
    adoptStyles(el)
  }, [styles])
}
