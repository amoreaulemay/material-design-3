import { css } from "lit";
export const icons = css `
  :host {
    --mdc-icon-fill: 0;
    --mdc-icon-weight: 400;
    --mdc-icon-grade: 0;
    --mdc-icon-optical-size: 48;
    
    --mdc-icon-size: 48px;
  }

  @font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: 100 700;
    src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v60/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsLjBuVY.woff2) format('woff2');
  }

  .material-symbols-outlined {
    font-family: 'Material Symbols Outlined',sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: var(--mdc-icon-size);
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    font-variation-settings: 'FILL' var(--mdc-icon-fill), 'wght' var(--mdc-icon-weight), 'GRAD' var(--mdc-icon-grade), 'opsz' var(--mdc-icon-optical-size);
  }
`;
