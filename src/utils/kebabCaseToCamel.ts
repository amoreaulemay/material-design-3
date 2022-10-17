export const kebabCaseToCamel = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase())
