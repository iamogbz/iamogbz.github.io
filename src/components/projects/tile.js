import { CustomElement } from "../custom-element.js";

export class ProjectTile extends CustomElement {
  static tagName = "project-tile";

  constructor() {
    super({
      templateSrc: "components/projects/tile.html",
    });
  }
}

customElements.define(ProjectTile.tagName, ProjectTile);
