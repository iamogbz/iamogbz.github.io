import { CustomElement } from "../custom-element.js";

export class AnimatedButton extends CustomElement {
  constructor() {
    super({
      templateSrc: "components/button/animated-button.html",
      attributeMap: { "#button-link": ["href"] },
    });
  }
}

AnimatedButton.tagName = "animated-button";

customElements.define(AnimatedButton.tagName, AnimatedButton);
