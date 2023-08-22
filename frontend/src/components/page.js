import { BaseComponent } from "./base.js"
import { onLocationChange } from "../shared/location.js"

export class PageComponent extends BaseComponent {
  static namedAttributes = Object.freeze({
    pathMatches: "path-matches",
    pathPattern: "path-pattern",
  });
  static template = this.templateSlot({ placeholder: "Page Content" });

  constructor() {
    super();
    this.renderPage();
    // this.handleUrlChange(new URL(window.location.href));
    onLocationChange({
      handler: (_, newValue) => this.handleUrlChange(newValue),
    });
  }

  /**
   * First attempt to restore page then render from template
   */
  renderPage() {
    if (this._pageContent) {
      this.renderTemplate(this._pageContent);
    } else {
      this.renderTemplate(PageComponent.template);
    }
  }

  /**
   * Cache current page content to restore on matching render
   */
  clearPage() {
    this._pageContent = this._root.innerHTML;
    this.renderTemplate("");
  }

  /**
   * @param {URL} newValue
   */
  handleUrlChange(newValue) {
    const pathPattern = this.getAttribute(
      PageComponent.namedAttributes.pathPattern
    );
    this.setAttribute(
      PageComponent.namedAttributes.pathMatches,
      String(!!newValue.pathname.match(pathPattern ?? ""))
    );
  }

  /**
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    // if the path pattern was changed recheck path matches
    if (name === PageComponent.namedAttributes.pathPattern) {
      this.handleUrlChange(new URL(window.location.href));
    }

    // if the url change causes match path change
    else if (name === PageComponent.namedAttributes.pathMatches) {
      if (newValue === "true") {
        this.renderPage();
      } else {
        this.clearPage();
      }
    }
  }
}

PageComponent.register();
