import {css, html} from "lit";
import {component} from "haunted";
import {useStyles} from "@hooks";
import {
    MdcBaseIconButton,
    MDCIconButtonProps,
} from "@components/mdc-base-icon-button";
import styles from "@styles";

export function MdcFilledIconButton(this: HTMLElement, props: MDCIconButtonProps) {
    useStyles(this, [
        ...styles.base,
        styles.iconButton,
        css`
          :host {
            /* Inactive State */
            --mdc-icon-btn-background: var(--md-sys-color-surface-variant);
            --mdc-icon-btn-color: var(--md-sys-color-primary);
            --mdc-icon-btn-state-layer: var(--md-sys-color-primary);
            
            /* Active State */
            --mdc-icon-btn-background-active: var(--md-sys-color-primary);
            --mdc-icon-btn-color-active: var(--md-sys-color-on-primary);
            --mdc-icon-btn-state-layer-active: var(--md-sys-color-on-primary);
          }
        `,
    ]);

    return html`${MdcBaseIconButton(props)}`;
}

customElements.define(
    'mdc-filled-icon-button',
    component<HTMLElement & MDCIconButtonProps>(
        MdcFilledIconButton,
        {
            observedAttributes: [
                'icon',
                'selected',
                'disabled',
            ],
        },
    ),
);