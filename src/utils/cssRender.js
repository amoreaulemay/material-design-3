import { css, unsafeCSS } from "lit";
import { camelCaseToKebab } from "./camelCaseToKebab";
export const cssRender = (obj, prefix) => {
    const linesLight = [];
    const linesDark = [];
    for (const key of Object.keys(obj)) {
        if (typeof obj[key] === "function" && key !== "css") {
            linesLight.push(`${prefix}-${camelCaseToKebab(key)}: ${obj[key]()};`);
        }
        else if (typeof obj[key] === "object" && key !== "css") {
            linesLight.push(`${prefix}-${camelCaseToKebab(key)}: ${obj[key].light()};`);
            linesDark.push(`${prefix}-${camelCaseToKebab(key)}: ${obj[key].dark()};`);
        }
    }
    if (linesDark.length === 0) {
        return css `
          :host {
            ${unsafeCSS(linesLight.join(''))}
          }
        `;
    }
    else {
        return css `
          :host {
            ${unsafeCSS(linesLight.join(''))}
          }
          
          @media(prefers-color-scheme: dark) {
            :host {
              ${unsafeCSS(linesDark.join(''))}
            }
          }
        `;
    }
};
