var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import md from "../../md";
import styles from "../../styles";
let MdcElevatedButton = class MdcElevatedButton extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    _clearFocus(e) {
        e.target.blur();
    }
    render() {
        return html `
            <button ?disabled=${this.disabled} @mouseup="${this._clearFocus}" tabindex="0">
                <slot name="icon"></slot>
                <slot></slot>
            </button>
        `;
    }
};
MdcElevatedButton.styles = [
    ...styles.base,
    css `
          button {
            all: unset;

            height: 40px;
            border-radius: 20px;
            padding-inline: 24px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            position: relative;

            background-color: var(--md-sys-color-surface);
            box-shadow: var(--md-sys-elevation1);
            color: var(--md-sys-color-primary);
            font-family: var(--md-sys-typescale-label-large-font), sans-serif;
            line-height: var(--md-sys-typescale-label-large-line-height);
            font-size: var(--md-sys-typescale-label-large-line-height);
            letter-spacing: var(--md-sys-typescale-label-large-tracking);
            font-weight: var(--md-sys-typescale-label-large-weight);
          }

          button:disabled {
            background-color: ${md.sys.color.onSurface.light(0.12)};
            color: ${md.sys.color.onSurface.light(0.38)};
            box-shadow: var(--md-sys-elevation0);
          }

          button:disabled::before {
            display: none;
          }

          @media (prefers-color-scheme: dark) {
            button:disabled {
              background-color: ${md.sys.color.onSurface.dark(0.12)};
              color: ${md.sys.color.onSurface.dark(0.38)};
            }
          }

          button::before {
            position: absolute;
            opacity: 0;
            content: "";
            height: 100%;
            width: 100%;
            border-radius: 20px;
            background-color: var(--md-sys-color-primary);
          }

          button:hover {
            box-shadow: var(--md-sys-elevation2);
          }

          button:hover::before {
            opacity: var(--md-sys-state-hover-state-layer-opacity);
          }
          
          button:focus::before {
            opacity: var(--md-sys-state-focus-state-layer-opacity);
          }
          
          button:active::before {
            opacity: var(--md-sys-state-pressed-state-layer-opacity);
          }

          ::slotted(*[slot="icon"]) {
            margin-left: -6px;
            height: 18px;
            width: 18px;
            display: inline-flex;
          }
        `,
];
__decorate([
    property()
], MdcElevatedButton.prototype, "disabled", void 0);
MdcElevatedButton = __decorate([
    customElement("mdc-elevated-button")
], MdcElevatedButton);
export { MdcElevatedButton };
