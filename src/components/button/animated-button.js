import { CustomElement } from "../custom-element.js";

export const BUTTON_LINK_ATTRIBUTES = ["href", "target"];

export class AnimatedButton extends CustomElement {
  constructor() {
    super({
      templateSrc: "components/button/animated-button.html",
      attributeMap: { "#button-link": ["href", "target"] },
    });
  }
}

AnimatedButton.tagName = "animated-button";

customElements.define(AnimatedButton.tagName, AnimatedButton);
