import { register } from "../shared/components.js";
import { values } from "../shared/object.js";
import { camelCaseToKebab } from "../shared/strings.js";

export class BaseComponent extends HTMLElement {
  /** @type {string} */
  static tagName;
  /** @type {{ readonly [key in string]: string }} */
  static namedAttributes;
  /** @type {{ readonly [key in string]: string }} */
  static namedSlots;
  /** @type {string} */
  static template;

  static register() {
    if (!this.tagName) {
      this.tagName = camelCaseToKebab(this.name);
    }
    register(this);
  }

  /**
   * Create slot template element
   * @param {{ name?: string, placeholder?: string}} param
   */
  static templateSlot({ name = "", placeholder = "" } = {}) {
    return `<slot name="${name}">${placeholder ?? name}</slot>`;
  }

  static get observedAttributes() {
    return values(this.namedAttributes);
  }

  constructor() {
    super();
    this._root = this.attachShadow({ mode: "open" });
  }

  /**
   * Helper function to insert template into root node from string
   * @param {string} template
   */
  renderTemplate(template) {
    this._root.innerHTML = template;
  }

  /**
   * Called when the component is first attached to the page document.
   */
  connectedCallback() {}

  /**
   * Handle web component watched attribute updates.
   * Set the static `observedAttributes` property
   * to control what triggers this callback.
   * Compare old and new values to determine if an internal value should be recalculated
   *
   * @param {string} _name
   * @param {string} _oldValue
   * @param {string} _newValue
   */
  attributeChangedCallback(_name, _oldValue, _newValue) {}
}
