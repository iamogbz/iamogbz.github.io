import { compareRepos, fetchRepos } from "../../utils/github/repos.js";
import { createSlotElement } from "../../utils/include-template.js";
import { CustomElement } from "../custom-element.js";
import { ExperimentTile } from "./tile.js";

const DELIMITER_PROPS = "|";
const DELIMITER_REPOS = "/";
const ATTRIBUTE_REPOS = "data-experiments";

/**
 * Render collection of lab experiments
 * [data-experiments]: repo-a|Repo A Description/repo-b|repo B description
 */
export class LabExperiments extends CustomElement {
  static tagName = "lab-experiments";

  constructor() {
    super({
      templateSrc: "components/experiments/lab.html",
    });

    this.loadData();
  }

  async loadData() {
    await this._templateLoader;
    this.setAttribute(ATTRIBUTE_REPOS, await loadData());
  }

  static get observedAttributes() {
    return [ATTRIBUTE_REPOS];
  }

  /**
   * Invoked each time one of the custom element's attributes is added, removed, or changed.
   * Which attributes to notice change for is specified in a static get observedAttributes method.
   * https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#using_the_lifecycle_callbacks
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === ATTRIBUTE_REPOS)
      this.renderDataExperiments(oldValue, newValue);
  }

  /**
   * Handle changes to `data-experiments` attribute
   * @param {string?} _ oldValue
   * @param {string?} newValue
   */
  renderDataExperiments(_, newValue) {
    newValue
      ?.split(DELIMITER_REPOS)
      .map((flattenedRepo, i) => {
        const [slugName, description] = flattenedRepo.split(DELIMITER_PROPS);
        const name = slugName.replace(/-/g, " ").toUpperCase();

        const experimentTileElem =
          this._root?.querySelectorAll(`${ExperimentTile.tagName}`).item(i) ??
          document.createElement(ExperimentTile.tagName);

        const tileNameElem =
          experimentTileElem.querySelector(`span[slot="name"]`) ??
          createSlotElement({ tag: "span", slot: "name" });
        tileNameElem.textContent = name;

        const tileDescriptionElem =
          experimentTileElem.querySelector(`span[slot="description"]`) ??
          createSlotElement({ tag: "span", slot: "description" });
        tileDescriptionElem.textContent = description;

        // experimentTileElem.innerHTML = `<span slot="name">${name}</span><span slot="description">${description}</span>`;
        experimentTileElem.appendChild(tileNameElem);
        experimentTileElem.appendChild(tileDescriptionElem);
        return experimentTileElem;
      })
      .forEach(tile => this._root.getElementById("lab")?.appendChild(tile));
  }
}

customElements.define(LabExperiments.tagName, LabExperiments);

// Component helpers

export async function loadData() {
  const repos = await fetchRepos({ username: "iamogbz", count: 100 });
  return repos
    .filter(r => !r.archived)
    .filter(r => r.stargazers_count)
    .sort((a, b) => compareRepos({ a, b }))
    .reverse()
    .map(r => [r.name, r.description].join(DELIMITER_PROPS))
    .join(DELIMITER_REPOS);
}
