import { copyAttributes } from "../utils/copy-attributes.js";
import { includeTemplate } from "../utils/include-template.js";

export class CustomElement extends HTMLElement {
  /**
   * @param {{ shadowInit?: ShadowRootInit, templateSrc?: string, attributeMap?: Record<string, string[]> }} params
   */
  constructor({ shadowInit, templateSrc, attributeMap = {} } = {}) {
    super();
    this._root = this.attachShadow({ mode: "open", ...shadowInit });
    this.templateSrc = templateSrc;

    if (this.templateSrc) {
      /** Copy attributes from base element to shadow element */
      const shadowAttributes = () => {
        Object.keys(attributeMap).forEach(selector => {
          const attributes = attributeMap[selector];
          this._root.querySelectorAll(selector).forEach(target => {
            copyAttributes({ attributes, source: this, target });
          });
        });
      };

      includeTemplate({
        srcPath: this.templateSrc,
        parentElement: this._root,
      }).then(shadowAttributes);
    }
  }
}
