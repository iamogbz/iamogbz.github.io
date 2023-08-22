/**
 * @param {(typeof import("../components/base").BaseComponent)[]} customElementClasses
 */
export function register(...customElementClasses) {
  for (const customElementType of customElementClasses) {
    customElements.define(customElementType.tagName, customElementType);
  }
}

/**
 * Create slot template element
 * @param {{ name?: string, placeholder?: string}} param
 */
export function templateSlot({ name = "", placeholder = "" } = {}) {
  return `<slot name="${name}">${placeholder ?? name}</slot>`;
}
