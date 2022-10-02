import {
    MdcElevatedButton,
    MdcFilledButton,
    MdcFilledTonalButton,
    MdcOutlinedButton,
    MdcTextButton,
    MDCFabProps,
    MDCFabExtendedProps,
} from "@components";

declare type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
    interface HTMLElementTagNameMap {
        "mdc-elevated-button": MdcElevatedButton;
        "mdc-filled-button": MdcFilledButton;
        "mdc-filled-tonal-button": MdcFilledTonalButton;
        "mdc-outlined-button": MdcOutlinedButton;
        "mdc-text-button": MdcTextButton;
        "mdc-fab": HTMLElement & MDCFabProps;
        "mdc-fab-extended": HTMLElement & MDCFabExtendedProps;
    }

    namespace JSX {
        interface IntrinsicElements {
            ['mdc-elevated-button']: CustomElement<MdcElevatedButton>;
            ['mdc-filled-button']: CustomElement<MdcFilledButton>;
            ['mdc-filled-tonal-button']: CustomElement<MdcFilledTonalButton>;
            ['mdc-outlined-button']: CustomElement<MdcOutlinedButton>;
            ['mdc-text-button']: CustomElement<MdcTextButton>;
            ['mdc-fab']: HTMLElement & MDCFabProps;
            ['mdc-fab-extended']: HTMLElement & MDCFabExtendedProps;
        }
    }
}