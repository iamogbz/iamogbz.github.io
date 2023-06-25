import { CustomElement } from "../custom-element.js";

export class AnimatedLogo extends CustomElement {
  static tagName = "animated-logo";

  constructor() {
    super({
      shadowInit: { mode: "closed" },
      templateSrc: "components/logo/animated-logo.html",
    });
  }
}

customElements.define(AnimatedLogo.tagName, AnimatedLogo);
