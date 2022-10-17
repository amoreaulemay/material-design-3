import {css, html} from 'lit'
import {component} from 'haunted'
import {useStyles} from '@hooks'
import {MdcBaseIconButton, MDCIconButtonProps} from '@components/mdc-base-icon-button'
import styles from '@styles'

export function MdcFilledTonalIconButton(this: HTMLElement, props: MDCIconButtonProps) {
  useStyles(this, [
    ...styles.base,
    styles.iconButton,
    css`
      :host {
        /* Inactive State */
        --mdc-icon-btn-background: var(--md-sys-color-surface-variant);
        --mdc-icon-btn-color: var(--md-sys-color-on-surface-variant);
        --mdc-icon-btn-state-layer: var(--md-sys-color-on-surface-variant);

        /* Active State */
        --mdc-icon-btn-background-active: var(--md-sys-color-secondary-container);
        --mdc-icon-btn-color-active: var(--md-sys-color-on-secondary-container);
        --mdc-icon-btn-state-layer-active: var(--md-sys-color-on-secondary-container);
      }
    `,
  ])

  return html`${MdcBaseIconButton(props)}`
}

customElements.define(
  'mdc-filled-tonal-icon-button',
  component<HTMLElement & MDCIconButtonProps>(MdcFilledTonalIconButton, {
    observedAttributes: ['icon', 'selected', 'disabled', 'selectable'],
  })
)
