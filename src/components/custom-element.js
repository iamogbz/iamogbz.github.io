import { includeTemplate } from "../utils/include-template.js";

export class CustomElement extends HTMLElement {
  /**
   * @param {{ shadowInit?: ShadowRootInit, templateSrc?: string }} params
   */
  constructor({ shadowInit, templateSrc } = {}) {
    super();
    this._root = this.attachShadow({ mode: "open", ...shadowInit });
    this.templateSrc = templateSrc;

    if (this.templateSrc) {
      includeTemplate({
        srcPath: this.templateSrc,
        parentElement: this._root,
      });
    }
  }
}
