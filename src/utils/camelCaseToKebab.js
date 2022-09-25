export const camelCaseToKebab = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
