import {css, CSSResult, unsafeCSS} from "lit";
import {DynamicAlphaColor} from "@utils";
import {color} from "./color";

const s = (v: string) => unsafeCSS(`0 0 var(${v})`);

export const elevation: CSSResult = css`
  :host {
    /* Surface tint color */
    --md-sys-elevation-surface-tint-color: var(--md-sys-color-primary);
    /* +5 */
    --md-sys-elevation-level5-value: 12px;
    --md-sys-elevation-level5-unit: 1px;
    --md-sys-elevation-level5: 12px;
    /* +4 */
    --md-sys-elevation-level4-value: 8px;
    --md-sys-elevation-level4-unit: 1px;
    --md-sys-elevation-level4: 8px;
    /* +3 */
    --md-sys-elevation-level3-value: 6px;
    --md-sys-elevation-level3-unit: 1px;
    --md-sys-elevation-level3: 6px;
    /* +2 */
    --md-sys-elevation-level2-value: 3px;
    --md-sys-elevation-level2-unit: 1px;
    --md-sys-elevation-level2: 3px;
    /* +1 */
    --md-sys-elevation-level1-value: 1px;
    --md-sys-elevation-level1-unit: 1px;
    --md-sys-elevation-level1: 1px;
    /* 0 */
    --md-sys-elevation-level0-value: 0px;
    --md-sys-elevation-level0-unit: 1px;
    --md-sys-elevation-level0: 0px;
    
    --md-sys-elevation0: ${s("--md-sys-elevation-level0")} ${(color.shadow as DynamicAlphaColor).light(0.0)};
    --md-sys-elevation1: ${s("--md-sys-elevation-level1")} ${(color.shadow as DynamicAlphaColor).light(0.1)};
    --md-sys-elevation2: ${s("--md-sys-elevation-level2")} ${(color.shadow as DynamicAlphaColor).light(0.2)};
    --md-sys-elevation3: ${s("--md-sys-elevation-level3")} ${(color.shadow as DynamicAlphaColor).light(0.3)};
    --md-sys-elevation4: ${s("--md-sys-elevation-level4")} ${(color.shadow as DynamicAlphaColor).light(0.4)};
    --md-sys-elevation5: ${s("--md-sys-elevation-level5")} ${(color.shadow as DynamicAlphaColor).light(0.5)};
  }
`;