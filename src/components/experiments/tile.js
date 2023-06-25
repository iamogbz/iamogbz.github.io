import { CustomElement } from "../custom-element.js";

class ExperimentTile extends CustomElement {
  constructor() {
    super({
      templateSrc: "components/experiments/tile.html",
    });
  }
}

customElements.define("experiment-tile", ExperimentTile);
