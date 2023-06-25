import { mapAttributes } from "../utils/element-attributes.js";
import { includeTemplate } from "../utils/include-template.js";

/**
 * Custom element base class
 * TODO: register as element and allow passing constructor params as attributes
 */
export class CustomElement extends HTMLElement {
  /**
   * @param {{
      attributeMap?: Record<string, string[]>,
      shadowInit?: ShadowRootInit,
      templateSrc?: string,
    }} params
   */
  constructor({ attributeMap = {}, shadowInit, templateSrc } = {}) {
    super();
    this._root = this.attachShadow({ mode: "open", ...shadowInit });
    this._attributeMap = attributeMap;
    this._templateSrc = templateSrc;
    this._templateLoader = this.loadTemplate();
  }

  async loadTemplate() {
    if (!this._templateSrc) return;
    await includeTemplate({
      srcPath: this._templateSrc,
      parentElement: this._root,
    });
    mapAttributes({
      attributeMap: this._attributeMap,
      source: this,
      targetRoot: this._root,
    });
  }
}
