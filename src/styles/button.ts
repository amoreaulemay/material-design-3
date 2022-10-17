import {css} from 'lit'

export const button = css`
  button {
    all: unset;
    align-items: center;
    background-color: var(--mdc-button-background);
    border-radius: calc(var(--mdc-button-height) / 2);
    border: var(--mdc-button-border-size, 0) solid var(--mdc-button-border-color, none);
    box-shadow: var(--md-button-elevation);
    box-sizing: border-box;
    color: var(--mdc-button-text-color);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    font-family: var(--md-sys-typescale-label-large-font), sans-serif;
    font-size: var(--md-sys-typescale-label-large-size);
    font-weight: var(--md-sys-typescale-label-large-weight);
    gap: 8px;
    height: var(--mdc-button-height);
    justify-content: center;
    letter-spacing: var(--md-sys-typescale-label-large-tracking);
    line-height: var(--md-sys-typescale-label-large-line-height);
    padding-inline: var(--mdc-button-padding-inline);
    position: relative;
  }

  button:disabled {
    background-color: var(--mdc-button-disabled-bg-light);
    box-shadow: var(--mdc-disabled-elevation);
    color: var(--mdc-button-disabled-text-light);
  }

  @media (prefers-color-scheme: dark) {
    button:disabled {
      background-color: var(--mdc-button-disabled-bg-dark);
      color: var(--mdc-button-disabled-text-dark);
    }
  }

  button:hover {
    box-shadow: var(--mdc-hover-elevation);
  }

  button:focus {
    box-shadow: var(--mdc-focus-elevation);
  }

  button:active {
    box-shadow: var(--mdc-pressed-elevation);
  }

  button::before {
    border-radius: calc(var(--mdc-button-height) / 2);
    content: '';
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    background-color: var(--mdc-state-layer-background);
  }

  button:disabled::before {
    display: none;
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

  ::slotted(*[slot='icon']) {
    margin-left: -6px;
    height: 18px;
    width: 18px;
    display: inline-flex;
  }
`
