import {css} from 'lit'
import md from '@md'

export const iconButton = css`
  * {
    transition: all 175ms ease-in-out;
  }

  .touch-target {
    box-sizing: border-box;
    padding: 4px;
    cursor: pointer;
    display: grid;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
  }

  .touch-target.disabled {
    cursor: not-allowed;
  }

  button {
    all: unset;
    align-items: center;
    background-color: var(--mdc-icon-btn-background);
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: center;
    position: relative;
    width: 40px;
    cursor: pointer;
  }

  button:disabled {
    --mdc-icon-btn-background: var(--mdc-icon-btn-background-disabled, ${md.sys.color.onSurface.light(0.12)});
    --mdc-icon-btn-color: ${md.sys.color.onSurface.light(0.38)};
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    --mdc-icon-btn-background: var(--mdc-icon-btn-background-disabled, ${md.sys.color.onSurface.dark(0.12)});
    --mdc-icon-btn-icon: ${md.sys.color.onSurface.dark(0.38)};
  }

  button.active {
    --mdc-icon-btn-background: var(--mdc-icon-btn-background-active);
    --mdc-icon-btn-color: var(--mdc-icon-btn-color-active);
  }

  button::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 9999px;
    opacity: 0;
    background-color: var(--mdc-icon-btn-state-layer);
  }

  button:disabled::before {
    content: none;
  }

  button.active::before {
    --mdc-icon-btn-state-layer: var(--mdc-icon-btn-state-layer-active);
  }

  button:hover::before {
    opacity: var(--md-sys-state-hover-state-layer-opacity);
  }

  button:focus::before {
    opacity: var(--md-sys-state-focus-state-layer-opacity);
  }

  button:active::before {
    opacity: var(--md-sys-state-pressed-state-layer-opacity);
  }
`
