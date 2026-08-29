import { BaseComponent } from "./src/components/base.js";
import { HeaderComponent } from "./src/components/header.js";
import { PageComponent } from "./src/components/page.js";
import { errorResultContainerNotFound } from "./src/language/default.js";
import { Api, Page } from "./src/shared/constants.js";

export class MainApp extends BaseComponent {
  static ids = {
    btnFetch: "btn-fetch",
    resultContainer: "box-results",
  };
  static template = `
<style>
${PageComponent.tagName} {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#${this.ids.resultContainer} {
  min-height: 400px;
  min-width: 400px;
}
</style>
<${HeaderComponent.tagName}>
  <span slot="${HeaderComponent.namedSlots.headerTitle}">Domo Ogbizi</span>
</${HeaderComponent.tagName}>
<${PageComponent.tagName} path-pattern="${Page.HOME.pattern}">
  <button id=${this.ids.btnFetch}>Fetch</button>
  <pre id=${this.ids.resultContainer}></pre>
</${PageComponent.tagName}>
`;

  static {
    this.register();
  }

  constructor() {
    super();
    this.renderTemplate(MainApp.template);
  }

  connectedCallback() {
    const fetchButton = this._root.getElementById(MainApp.ids.btnFetch);
    const resultContainer = this._root.getElementById(
      MainApp.ids.resultContainer
    );

    fetchButton.onclick = async () => {
      const response = await fetch(Api.HELLO.url, {
        cache: "force-cache",
      }).then((r) => r.json());
      if (!resultContainer) throw Error(errorResultContainerNotFound);
      resultContainer.innerHTML = JSON.stringify(response, null, 2);
    };
  }
}
