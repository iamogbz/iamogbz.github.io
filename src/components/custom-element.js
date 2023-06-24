import { includeTemplate } from "../utils/include-template.js";

export class CustomElement extends HTMLElement {
  /**
   * @param {{ shadowInit?: ShadowRootInit, templateSrc?: string }} params
   */
  constructor({ shadowInit, templateSrc } = {}) {
    super();
    this._root = this.attachShadow({ mode: "open", ...shadowInit });
    this.templateSrc = templateSrc;
  }

  connectedCallback() {
    if (!this._root) return;
    if (!this.templateSrc) return;

    includeTemplate({
      srcPath: this.templateSrc,
      parentElement: this._root,
    });
  }
}
