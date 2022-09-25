import {html, css, LitElement, CSSResultGroup} from "lit";
import {customElement, property} from "lit/decorators.js";
import md from "../../md";
import styles from "../../styles";

@customElement("mdc-filled-button")
export class MdcFilledButton extends LitElement {
    @property() disabled: boolean = false;

    static override styles: CSSResultGroup = [
        ...styles.base,
        css`
          button {
            all: unset;
            
            background-color: var(--md-sys-color-primary);
          }
        `,
    ];

    private _clearFocus(e: MouseEvent) {
        (e.target as HTMLButtonElement).blur();
    }

    protected override render() {
        return html`
            <button ?disabled=${this.disabled} @mouseup="${this._clearFocus}"
                    tabindex="0">
                <slot name="icon"></slot>
                <slot></slot>
            </button>
        `;
    }
}