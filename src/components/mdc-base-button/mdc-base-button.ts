import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("mdc-base-button")
export class MdcBaseButton extends LitElement {
    @property() disabled: boolean = false;

    protected _clearFocus(e: MouseEvent) {
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