import { CustomElement } from "../custom-element.js";

class LabExperiments extends CustomElement {
  constructor() {
    super({
      templateSrc: "components/experiments/lab.html",
    });
  }
}

customElements.define("lab-experiments", LabExperiments);
