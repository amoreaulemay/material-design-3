import {Colors, cssRender, css} from "@utils";
import ref from "../ref";

export const color: Colors = {
    primary: {
        light: ref.palette.primary40,
        dark: ref.palette.primary80,
    },
    primaryContainer: {
        light: ref.palette.primary90,
        dark: ref.palette.primary30,
    },
    secondary: {
        light: ref.palette.secondary40,
        dark: ref.palette.secondary80,
    },
    secondaryContainer: {
        light: ref.palette.secondary90,
        dark: ref.palette.secondary30,
    },
    tertiary: {
        light: ref.palette.tertiary40,
        dark: ref.palette.tertiary80,
    },
    tertiaryContainer: {
        light: ref.palette.tertiary90,
        dark: ref.palette.tertiary30,
    },
    surface: {
        light: ref.palette.neutral99,
        dark: ref.palette.neutral10,
    },
    surfaceVariant: {
        light: ref.palette.neutralVariant90,
        dark: ref.palette.neutralVariant30,
    },
    background: {
        light: ref.palette.neutral99,
        dark: ref.palette.neutral10,
    },
    error: {
        light: ref.palette.error40,
        dark: ref.palette.error80,
    },
    errorContainer: {
        light: ref.palette.error90,
        dark: ref.palette.error30,
    },
    onPrimary: {
        light: ref.palette.primary100,
        dark: ref.palette.primary20,
    },
    onPrimaryContainer: {
        light: ref.palette.primary10,
        dark: ref.palette.primary90,
    },
    onSecondary: {
        light: ref.palette.secondary100,
        dark: ref.palette.secondary20,
    },
    onSecondaryContainer: {
        light: ref.palette.secondary10,
        dark: ref.palette.secondary90,
    },
    onTertiary: {
        light: ref.palette.tertiary100,
        dark: ref.palette.tertiary20,
    },
    onTertiaryContainer: {
        light: ref.palette.tertiary10,
        dark: ref.palette.tertiary90,
    },
    onSurface: {
        light: ref.palette.neutral10,
        dark: ref.palette.neutral90,
    },
    onSurfaceVariant: {
        light: ref.palette.neutralVariant30,
        dark: ref.palette.neutralVariant80,
    },
    onError: {
        light: ref.palette.error100,
        dark: ref.palette.error20,
    },
    onErrorContainer: {
        light: ref.palette.error10,
        dark: ref.palette.error80,
    },
    onBackground: {
        light: ref.palette.neutral10,
        dark: ref.palette.neutral90,
    },
    outline: {
        light: ref.palette.neutralVariant50,
        dark: ref.palette.neutralVariant60,
    },
    outlineVariant: {
        light: ref.palette.neutralVariant80,
        dark: ref.palette.neutralVariant30,
    },
    shadow: {
        light: ref.palette.neutral0,
        dark: ref.palette.neutral0,
    },
    surfaceTint: {
        light: ref.palette.primary40,
        dark: ref.palette.primary80,
    },
    inverseSurface: {
        light: ref.palette.neutral20,
        dark: ref.palette.neutral90,
    },
    inverseOnSurface: {
        light: ref.palette.neutral95,
        dark: ref.palette.neutral20,
    },
    inversePrimary: {
        light: ref.palette.primary80,
        dark: ref.palette.primary40,
    },
    scrim: {
        light: ref.palette.neutral0,
        dark: ref.palette.neutral0,
    },

    [css]: function() { return cssRender(this, "--md-sys-color") }
}