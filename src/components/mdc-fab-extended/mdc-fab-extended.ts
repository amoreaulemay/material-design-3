import {MdcIcon} from "@components";
import styles from "@styles";
import {component} from "haunted";
import {css, html} from "lit";
import {useStyles} from "@hooks";
import {classMap} from "lit/directives/class-map.js";

declare type FabColorMapping = "surface" | "secondary" | "tertiary" | undefined;

export interface MDCFabExtendedProps {
    title: string;
    icon?: string;
    colorMapping: FabColorMapping;
    lowered?: boolean;
    full?: boolean;
}

export function MdcFabExtended(this: HTMLElement, {
    title,
    icon,
    colorMapping,
    lowered,
    full,
}: MDCFabExtendedProps) {
    useStyles(this, [
        ...styles.base,
        css`
          :host {
            --mdc-fab-background: var(--md-sys-color-primary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-primary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-primary-container);

            --mdc-fab-border-radius: 16px;
          }

          .fab-extended {
            position: relative;
            height: 56px;
            min-width: 80px;
            width: fit-content;
            border-radius: var(--mdc-fab-border-radius);
            margin: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 8px;
            box-shadow: var(--md-sys-elevation3);
            color: var(--mdc-fab-icon-color);
            cursor: pointer;
            background-color: var(--mdc-fab-background);
            padding: 16px;
            user-select: none;
          }

          .fab-extended:hover {
            box-shadow: var(--md-sys-elevation4);
          }
          
          .fab-extended:focus {
            outline: none;
          }
          
          /* Title */
          .fab-extended > .title {
            color: var(--mdc-fab-icon-color);
            font-family: var(--md-sys-typescale-label-large-font);
            line-height: var(--md-sys-typescale-label-large-line-height);
            font-size: var(--md-sys-typescale-label-large-size);
            letter-spacing: var(--md-sys-typescale-label-large-tracking);
            font-weight: var(--md-sys-typescale-label-large-weight);
            text-transform: capitalize;
          }

          /* Color Mapping */

          .fab-extended.surface {
            --mdc-fab-background: var(--md-sys-color-surface);
            --mdc-fab-state-layer-background: var(--md-sys-color-primary);
            --mdc-fab-icon-color: var(--md-sys-color-primary);
          }

          .fab-extended.secondary {
            --mdc-fab-background: var(--md-sys-color-secondary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-secondary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-secondary-container);
          }

          .fab-extended.tertiary {
            --mdc-fab-background: var(--md-sys-color-tertiary-container);
            --mdc-fab-state-layer-background: var(--md-sys-color-on-tertiary-container);
            --mdc-fab-icon-color: var(--md-sys-color-on-tertiary-container);
          }

          /* State layer */

          .fab-extended::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            opacity: 0;
            background-color: var(--mdc-fab-state-layer-background);
            border-radius: var(--mdc-fab-border-radius);
          }

          .fab-extended:hover::before {
            opacity: var(--md-sys-state-hover-state-layer-opacity);
          }

          .fab-extended:focus::before {
            opacity: var(--md-sys-state-focus-state-layer-opacity);
          }

          .fab-extended:active::before {
            opacity: var(--md-sys-state-pressed-state-layer-opacity);
          }

          /* Full width */

          .fab-extended.full {
            width: 100%;
          }

          /* FAB lowered */

          .fab-extended.lowered {
            box-shadow: var(--md-sys-elevation1);
          }

          .fab-extended.lowered:hover {
            box-shadow: var(--md-sys-elevation2);
          }
        `,
    ]);

  const handleClick = (event: MouseEvent) => {
    (event.target as HTMLElement).blur()
  }

    return html`
        <div tabindex="0" role="button" @click=${handleClick} class=${classMap({
            'fab-extended': true,
            'lowered': lowered ?? false,
            'full': full ?? false,
            'surface': colorMapping === "surface",
            'secondary': colorMapping === "secondary",
            'tertiary': colorMapping === "tertiary",
        })}>
            ${icon && html`${MdcIcon({
                name: icon,
                size: 24,
                color: "var(--mdc-fab-icon-color)",
            })}`}
            <div class="title">${title}</div>
        </div>
    `;
}

customElements.define(
    'mdc-fab-extended',
    component<HTMLElement & MDCFabExtendedProps>(
        MdcFabExtended,
        {
            observedAttributes: [
                // @ts-ignore
                'color-mapping',
                'title',
                'icon',
                'lowered',
                'full',
            ],
        },
    ),
);