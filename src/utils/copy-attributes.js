/**
 * Copy attributes from a source element to target element
 * @param {{ source: HTMLElement, target: HTMLElement, attributes: string[] }} params
 */
export function copyAttributes({ source, target, attributes }) {
  attributes.forEach(attrName => {
    const attrValue = source.getAttribute(attrName);
    if (attrValue) target.setAttribute(attrName, attrValue);
  });
}
