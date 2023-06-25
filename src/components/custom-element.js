import { copyAttributes } from "../utils/copy-attributes.js";
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
    this._templateLoader = Promise.resolve();
    this._templateSrc = templateSrc;

    if (this._templateSrc) {
      /** Copy attributes from base element to shadow element */
      const shadowAttributes = () => {
        Object.keys(attributeMap).forEach(selector => {
          const attributes = attributeMap[selector];
          this._root.querySelectorAll(selector).forEach(target => {
            copyAttributes({ attributes, source: this, target });
          });
        });
      };

      this._templateLoader = includeTemplate({
        srcPath: this._templateSrc,
        parentElement: this._root,
      }).then(shadowAttributes);
    }
  }
}
