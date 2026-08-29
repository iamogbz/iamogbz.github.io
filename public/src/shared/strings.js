/**
 * @param {string} camelCaseStr
 */
export function camelCaseToKebab(camelCaseStr) {
  return fromCamelCase(camelCaseStr)
    .map((s) => s.toLowerCase())
    .join("-");
}

/**
 * @param {string} camelCaseStr
 */
function fromCamelCase(camelCaseStr) {
  const pattern = /[A-Z]/g;
  const sections = camelCaseStr.split(pattern).filter(Boolean);
  const caps = camelCaseStr.match(pattern);
  if (!caps) return [camelCaseStr];
  const offset = sections.length - caps.length;
  return sections.map((s, i) => {
    return `${caps[i - offset] ?? ""}${s}`;
  });
}

/**
 * @param {string} str
 */
export function base64encode(str) {
  return window.btoa(str);
}
