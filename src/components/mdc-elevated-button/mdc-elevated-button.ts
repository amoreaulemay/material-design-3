import {css, CSSResultGroup} from 'lit'
import {customElement} from 'lit/decorators.js'
import {MdcBaseButton} from '@components/mdc-base-button'
import md from '@md'
import styles from '@styles'

@customElement('mdc-elevated-button')
export class MdcElevatedButton extends MdcBaseButton {
  static override styles: CSSResultGroup = [
    ...styles.base,
    styles.button,
    css`
      button {
        --mdc-button-background: var(--md-sys-color-surface);
        --mdc-button-elevation: var(--md-sys-elevation1);
        --mdc-button-height: 40px;
        --mdc-button-padding-inline: 24px;
        --mdc-button-text-color: var(--md-sys-color-primary);
        --mdc-pressed-elevation: var(--md-sys-elevation1);
        --mdc-disabled-elevation: var(--md-sys-elevation0);
        --mdc-focus-elevation: var(--md-sys-elevation1);
        --mdc-hover-elevation: var(--md-sys-elevation2);
        --mdc-state-layer-background: var(--md-sys-color-primary);
        --mdc-button-disabled-bg-light: ${md.sys.color.onSurface.light(0.12)};
        --mdc-button-disabled-bg-dark: ${md.sys.color.onSurface.dark(0.12)};
        --mdc-button-disabled-text-light: ${md.sys.color.onSurface.light(0.38)};
        --mdc-button-disabled-text-dark: ${md.sys.color.onSurface.dark(0.38)};
      }
    `,
  ]
}
