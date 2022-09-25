import md from "../md";
import {css} from "../utils";

export const base = [
    md.ref.palette[css](),
    md.ref.typeface,
    md.sys.color[css](),
    md.sys.typescale,
    md.sys.elevation,
    md.sys.state,
];