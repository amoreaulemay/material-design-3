var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "../../styles";
let MdcFilledButton = class MdcFilledButton extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    _clearFocus(e) {
        e.target.blur();
    }
    render() {
        return html `
            <button ?disabled=${this.disabled} @mouseup="${this._clearFocus}"
                    tabindex="0">
                <slot name="icon"></slot>
                <slot></slot>
            </button>
        `;
    }
};
MdcFilledButton.styles = [
    ...styles.base,
    css `
          button {
            all: unset;
            
            background-color: var(--md-sys-color-primary);
          }
        `,
];
__decorate([
    property()
], MdcFilledButton.prototype, "disabled", void 0);
MdcFilledButton = __decorate([
    customElement("mdc-filled-button")
], MdcFilledButton);
export { MdcFilledButton };
