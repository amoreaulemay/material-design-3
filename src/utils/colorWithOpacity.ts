import {unsafeCSS} from "lit";

export const colorWithOpacity = (color: string, opacity?: number) => {
    const hexValue = Math.round((opacity ?? 1) * 255).toString(16).padStart(2, '0');

    return unsafeCSS(color + hexValue);
}