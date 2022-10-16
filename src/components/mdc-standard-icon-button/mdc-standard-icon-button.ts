import { css, html }                             from 'lit'
import { component }                             from 'haunted'
import { useStyles }                             from '@hooks'
import { MdcBaseIconButton, MDCIconButtonProps } from '@components/mdc-base-icon-button'
import styles                                    from '@styles'

export function MdcStandardIconButton(this: HTMLElement, props: MDCIconButtonProps) {
  useStyles(this, [
    ...styles.base,
    styles.iconButton,
    css`
      :host {
        /* Disabled State */
        --mdc-icon-btn-background-disabled: none;

        /* Inactive State */
        --mdc-icon-btn-background: none;
        --mdc-icon-btn-color: var(--md-sys-color-on-surface-variant);
        --mdc-icon-btn-state-layer: var(--md-sys-color-on-surface-variant);

        /* Active State */
        --mdc-icon-btn-background-active: none;
        --mdc-icon-btn-color-active: var(--md-sys-color-primary);
        --mdc-icon-btn-state-layer-active: var(--md-sys-color-primary);
      }
    `,
  ])

  return html`${MdcBaseIconButton(props)}`
}

customElements.define(
  'mdc-standard-icon-button',
  component<HTMLElement & MDCIconButtonProps>(
    MdcStandardIconButton,
    {
      observedAttributes: [
        'icon',
        'selected',
        'disabled',
        'selectable',
      ],
    },
  ),
)