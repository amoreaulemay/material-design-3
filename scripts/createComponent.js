import { capitalizeFirstLetter, kebabCaseToCamel } from "@utils";
const className = (n) => capitalizeFirstLetter(kebabCaseToCamel(n));
const elementTemplate = `
import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorator.js";
import styles from "@styles";

@customElement("<element-name>")
export class <class-name> extends LitElement {
    static override styles = [
        ...styles.base,
        css\`\`,
    ];

    
}
`;
