import { CustomElement } from "../custom-element.js";

export class ExperimentTile extends CustomElement {
  static tagName = "experiment-tile";

  constructor() {
    super({
      templateSrc: "components/experiments/tile.html",
    });
  }
}

customElements.define(ExperimentTile.tagName, ExperimentTile);
