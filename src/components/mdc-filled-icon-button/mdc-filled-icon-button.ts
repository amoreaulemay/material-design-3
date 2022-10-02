import {MdcIcon} from "@components/mdc-icon";
import {useStyles} from "@hooks";
import styles from "@styles";
import {useState} from "haunted";
import {html} from "lit";

const ICON_SIZE = 24;

export interface MDCFilledIconButtonProps {
    icon: string;
}

export function MdcFilledIconButton(this: HTMLElement, { icon }: MDCFilledIconButtonProps) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(!isActive);

    useStyles(this, [
        ...styles.base,
    ]);

    return html`
        <button>
            ${MdcIcon({name: icon, size: ICON_SIZE})}
        </button>
    `;
}