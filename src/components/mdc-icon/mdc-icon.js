import { virtual } from "haunted";
import { styleMap } from "lit/directives/style-map.js";
import { html } from "lit";
export const MdcIcon = virtual(function ({ name, fill, weight, grade, size, color }) {
    const styles = {
        '--mdc-icon-fill': String(fill ? 1 : 0),
        '--mdc-icon-weight': String(weight ?? 400),
        '--mdc-icon-grade': String(grade ?? 0),
        '--mdc-icon-optical-size': String(size ?? 48),
        '--mdc-icon-size': String(size ?? 48) + "px",
        color: color,
    };
    return html `<span class="material-symbols-outlined" style=${styleMap(styles)}>${name}</span>`;
});
