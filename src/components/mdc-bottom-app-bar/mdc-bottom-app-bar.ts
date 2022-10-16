import { component, useEffect } from 'haunted'
import { css, html }            from 'lit'
import { useStyles }            from '@hooks'
import styles                   from '@styles'

export function MdcBottomAppBar(
  this: HTMLElement,
) {
  useStyles(this, [
    ...styles.base,
    css`
      .mdc-bottom-app-bar {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        position: fixed;
        z-index: 100;
        gap: 8px;
        padding-inline: 16px;
        box-shadow: var(--md-sys-elevation2);
        background-color: var(--md-sys-color-surface);
        bottom: 0;
        left: 0;
        right: 0;
      }

      .icons-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;
      }
    `,
  ])

  useEffect(() => {
    const overflowMenu = this.querySelectorAll<HTMLElement>('*[slot="overflow-menu"]')
    const icons = this.querySelectorAll<HTMLElement>('*[slot="icons"]')
    const fabs = this.querySelectorAll<HTMLElement>('*[slot="fab"]')

    // Makes icon button non-selectable
    overflowMenu.forEach(e => e.setAttribute('selectable', 'false'))
    icons.forEach(e => e.setAttribute('selectable', 'false'))

    // Lowers the fab && removes margin
    fabs.forEach(fab => {
      fab.setAttribute('lowered', 'true')
      fab.shadowRoot?.querySelector<HTMLDivElement>('.fab') && (fab.shadowRoot.querySelector<HTMLDivElement>('.fab')!.style.margin = '0px')
    })

    // Removes icons if more than maximum
    fabs.forEach((fab, index) => {
      if (index > 0) {
        fab.style.display = 'none'
      }
    })

    overflowMenu.forEach((e, index) => {
      if (index > 0) {
        e.style.display = 'none'
      }
    })

    if (overflowMenu.length > 0 && icons.length > 3) {
      icons.forEach((e, index) => {
        if (index > 2) {
          e.style.display = 'none'
        }
      })
    } else if (overflowMenu.length === 0 && icons.length > 4) {
      icons.forEach((e, index) => {
        if (index > 3) {
          e.style.display = 'none'
        }
      })
    }

  }, [])

  return html`
      <div class="mdc-bottom-app-bar">
          <div class="icons-wrapper">
              <slot name="overflow-menu"></slot>
              <slot name="icons"></slot>
          </div>
          <slot name="fab"></slot>
      </div>
  `
}

customElements.define('mdc-bottom-app-bar', component<HTMLElement>(MdcBottomAppBar))