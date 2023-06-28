import { BUTTON_LINK_ATTRIBUTES } from "../button/animated-button.js";
import { CustomElement } from "../custom-element.js";

export class ProjectTile extends CustomElement {
  static tagName = "project-tile";

  constructor() {
    super({
      templateSrc: "components/projects/tile.html",
      attributeMap: {
        "animated-button": BUTTON_LINK_ATTRIBUTES,
      },
    });
  }
}

customElements.define(ProjectTile.tagName, ProjectTile);
