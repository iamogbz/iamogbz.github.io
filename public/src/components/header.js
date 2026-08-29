
import { BaseComponent } from "./base.js"

export class HeaderComponent extends BaseComponent {
  static namedSlots = Object.freeze({
    headerTitle: "header-title",
  });
  static template = `
<style>
  h1 {
    align-items: center;
    display: flex;
    justify-content: center;
  }
</style>
<h1>${this.templateSlot({ name: this.namedSlots.headerTitle })}</h1>
`;

  static {
    this.register();
  }

  constructor() {
    super();
    this.renderTemplate(HeaderComponent.template);
  }
}
