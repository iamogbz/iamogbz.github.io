import { CustomElement } from "../custom-element.js";

class AnimatedButton extends CustomElement {
  constructor() {
    super({
      templateSrc: "components/button/animated-button.html",
      attributeMap: { "#button-link": ["href"] },
    });
  }
}

customElements.define("animated-button", AnimatedButton);
