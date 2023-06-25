/**
 * Copy attributes from source element to elements in target root by attribute map selectors
 * @param {{
      attributeMap: Record<string, string[]>,
      source: HTMLElement,
      targetRoot: HTMLElement | ShadowRoot,
    }} params
 */
export function mapAttributes({ attributeMap, source, targetRoot }) {
  Object.keys(attributeMap).forEach(selector => {
    const attributes = attributeMap[selector];
    targetRoot?.querySelectorAll(selector).forEach(target => {
      copyAttributes({ attributes, source, target });
    });
  });
}

/**
 * Copy attributes from a source element to target element
 * @param {{ source: Element, target: Element, attributes: string[] }} params
 */
function copyAttributes({ source, target, attributes }) {
  attributes.forEach(attrName => {
    const attrValue = source.getAttribute(attrName);
    if (attrValue) target.setAttribute(attrName, attrValue);
  });
}
