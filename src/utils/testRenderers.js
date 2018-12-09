import { mount, shallow } from "enzyme";

const render = (reactComponent, renderFn) => renderFn(reactComponent);

export const mountRender = reactComponent => render(reactComponent, mount);
export const shallowRender = reactComponent => render(reactComponent, shallow);
