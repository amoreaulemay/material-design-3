import {virtual} from "haunted";
import {styleMap} from "lit/directives/style-map.js";
import {html, TemplateResult} from "lit";

export interface MDCIconProps {
    name: string;
    fill?: boolean;
    weight?: number;
    grade?: number;
    size?: number;
    color?: string;
}

export const MdcIcon = virtual(function(this: HTMLElement, {name, fill, weight, grade, size, color}: MDCIconProps) {
    const styles = {
        '--mdc-icon-fill': String(fill ? 1 : 0),
        '--mdc-icon-weight': String(weight ?? 400),
        '--mdc-icon-grade': String(grade ?? 0),
        '--mdc-icon-optical-size': String(size ?? 48),
        '--mdc-icon-size': String(size ?? 48) + "px",
        color: color,
    }

    return html`<span class="material-symbols-outlined" style=${styleMap(styles)}>${name}</span>`;

}) as (props: MDCIconProps) => TemplateResult;