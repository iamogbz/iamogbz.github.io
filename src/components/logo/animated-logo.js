import { CustomElement } from "../custom-element.js";

class AnimatedLogo extends CustomElement {
  constructor() {
    super({
      shadowInit: { mode: "closed" },
      templateSrc: "src/components/logo/animated-logo.html",
    });
  }
}

customElements.define("animated-logo", AnimatedLogo);
