import {html, css} from "lit";
import {classMap} from "lit/directives/class-map.js";
import {component} from "haunted";
import styles from "@styles";
import {useStyles} from "@hooks";
import {MdcIcon} from "@components/mdc-icon";

declare type FabSize = "small" | "large" | undefined;
declare type FabColorMapping = "surface" | "secondary" | "tertiary" | undefined;

export interface MDCFabProps {
    size: FabSize,
    colorMapping: FabColorMapping,
    lowered?: boolean,
    icon: string,
}

const DEFAULT_ICON_NAME = "add";
const DEFAULT_ICON_SIZE = 24;

export function MdcFab(this: HTMLElement, {
    size,
    colorMapping,
    lowered,
    icon,
}: MDCFabProps) {
    const iconSize = () => {
        switch (size) {
            case "small":
                return 24;
            case "large":
                return 36;
            default:
                return DEFAULT_ICON_SIZE;
        }
    }

    useStyles(this, [
        ...styles.base,
        css`
          :host {
            --mdc-fab-background: var(--md-sys-color-primary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-primary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-primary-container);
            
            --mdc-fab-size: 56px;
            --mdc-fab-border-radius: calc(var(--mdc-fab-size) * 0.3);
          }
          
          .fab {
            align-items: center;
            background-color: var(--mdc-fab-background);
            border-radius: var(--mdc-fab-border-radius);
            box-shadow: var(--md-sys-elevation3);
            box-sizing: border-box;
            cursor: pointer;
            display: grid;
            height: var(--mdc-fab-size);
            justify-content: center;
            margin: 16px;
            position: relative;
            user-select: none;
            width: var(--mdc-fab-size);
          }
          
          .fab:hover {
            box-shadow: var(--md-sys-elevation4);
          }
          
          /* Color Mapping */
          .fab.surface {
            --mdc-fab-background: var(--md-sys-color-surface);
            --mdc-fab-state-layer-background: var(--md-sys-color-primary);
            --mdc-fab-icon-color: var(--md-sys-color-primary);
          }
          
          .fab.secondary {
            --mdc-fab-background: var(--md-sys-color-secondary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-secondary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-secondary-container);
          }
          
          .fab.tertiary {
            --mdc-fab-background: var(--md-sys-color-tertiary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-tertiary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-tertiary-container);
          }
          
          /* State layer */
          .fab::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 0;
            background-color: var(--mdc-fab-state-layer-background);
            border-radius: var(--mdc-fab-border-radius);
          }
          
          .fab:hover::before {
            opacity: var(--md-sys-state-hover-state-layer-opacity);
          }
          
          .fab:focus::before {
            opacity: var(--md-sys-state-focus-state-layer-opacity);
          }
          
          .fab:active::before {
            opacity: var(--md-sys-state-pressed-state-layer-opacity);
          }
          
          /* FAB size */
          .fab.large {
            --mdc-fab-size: 96px;
            --mdc-fab-border-radius: calc(var(--mdc-fab-size) * 0.3);
          }
          
          .fab.small {
            --mdc-fab-size: 40px;
            --mdc-fab-border-radius: calc(var(--mdc-fab-size) * 0.3);
          }
          
          /* FAB lowered */
          .fab.lowered {
            box-shadow: var(--md-sys-elevation1);
          }
          
          .fab.lowered:hover {
            box-shadow: var(--md-sys-elevation2);
          }
        `,
    ]);

    return html`
        <div role="button" class=${classMap({
            'fab': true,
            'large': size === "large",
            'small': size === "small",
            'lowered': lowered ?? false,
            'surface': colorMapping === "surface",
            'secondary': colorMapping === "secondary",
            'tertiary': colorMapping === "tertiary",
        })}>
            ${MdcIcon({name: (icon ?? DEFAULT_ICON_NAME), size: iconSize(), color: "var(--mdc-fab-icon-color)"})}
        </div>
    `;
}

customElements.define(
    'mdc-fab',
    component<HTMLElement & MDCFabProps>(
        MdcFab,
        {
            observedAttributes: [
                // @ts-ignore
                'color-mapping',
                'size',
                'lowered',
                'icon'
            ],
        }
    )
);