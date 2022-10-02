var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css } from "lit";
import { customElement } from "lit/decorators.js";
import { MdcBaseButton } from "@components/mdc-base-button";
import md from "@md";
import styles from "@styles";
let MdcFilledButton = class MdcFilledButton extends MdcBaseButton {
};
MdcFilledButton.styles = [
    ...styles.base,
    styles.button,
    css `
          button {
            --mdc-button-background: var(--md-sys-color-primary);
            --mdc-button-elevation: var(--md-sys-elevation0);
            --mdc-button-height: 40px;
            --mdc-button-padding-inline: 24px;
            --mdc-button-text-color: var(--md-sys-color-on-primary);
            --mdc-pressed-elevation: var(--md-sys-elevation0);
            --mdc-disabled-elevation: var(--md-sys-elevation0);
            --mdc-focus-elevation: var(--md-sys-elevation0);
            --mdc-hover-elevation: var(--md-sys-elevation1);
            --mdc-state-layer-background: var(--md-sys-color-on-primary);
            --mdc-button-disabled-bg-light: ${md.sys.color.onSurface.light(0.12)};
            --mdc-button-disabled-bg-dark: ${md.sys.color.onSurface.dark(0.12)};
            --mdc-button-disabled-text-light: ${md.sys.color.onSurface.light(0.38)};
            --mdc-button-disabled-text-dark: ${md.sys.color.onSurface.dark(0.38)};
          }
        `
];
MdcFilledButton = __decorate([
    customElement("mdc-filled-button")
], MdcFilledButton);
export { MdcFilledButton };
