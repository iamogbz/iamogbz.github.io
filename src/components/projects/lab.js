import { compareRepos, fetchRepos } from "../../utils/github/repos.js";
import { createSlotElement } from "../../utils/include-template.js";
import { CustomElement } from "../custom-element.js";
import { ProjectTile } from "./tile.js";

const DELIMITER_PROPS = "|";
const DELIMITER_REPOS = "/";
const ATTRIBUTE_REPOS = "data-projects";

/**
 * Render collection of lab projects
 * [data-projects]: repo-a|Repo A Description/repo-b|repo B description
 */
export class LabProjects extends CustomElement {
  static tagName = "lab-projects";

  constructor() {
    super({
      templateSrc: "components/projects/lab.html",
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
    if (name === ATTRIBUTE_REPOS) this.renderProjects(oldValue, newValue);
  }

  /**
   * Handle changes to `data-projects` attribute
   * @param {string?} _ oldValue
   * @param {string?} newValue
   */
  renderProjects(_, newValue) {
    newValue
      ?.split(DELIMITER_REPOS)
      .filter(Boolean)
      .map((flattenedRepo, i) => {
        const [slugName, description] = flattenedRepo.split(DELIMITER_PROPS);
        const name = slugName.replace(/-/g, " ").toUpperCase();

        const projectTileElem =
          this._root?.querySelectorAll(`${ProjectTile.tagName}`).item(i) ??
          document.createElement(ProjectTile.tagName);

        const tileNameElem =
          projectTileElem.querySelector(`span[slot="name"]`) ??
          createSlotElement({ tag: "span", slot: "name" });
        tileNameElem.textContent = name;

        const tileDescriptionElem =
          projectTileElem.querySelector(`span[slot="description"]`) ??
          createSlotElement({ tag: "span", slot: "description" });
        tileDescriptionElem.textContent = description;

        // projectTileElem.innerHTML = `<span slot="name">${name}</span><span slot="description">${description}</span>`;
        projectTileElem.appendChild(tileNameElem);
        projectTileElem.appendChild(tileDescriptionElem);
        return projectTileElem;
      })
      .forEach(tile => this._root.getElementById("lab")?.appendChild(tile));
  }
}

customElements.define(LabProjects.tagName, LabProjects);

// Component helpers

export async function loadData() {
  const repos = await fetchRepos({ username: "iamogbz", count: 0 });
  return repos
    .filter(r => !r.archived)
    .filter(r => r.stargazers_count)
    .sort((a, b) => compareRepos({ a, b }))
    .reverse()
    .map(r => [r.name, r.description].join(DELIMITER_PROPS))
    .join(DELIMITER_REPOS);
}
