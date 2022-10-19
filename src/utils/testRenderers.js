import React from "react";
// import { mount, shallow } from "enzyme";
import { render } from "@testing-library/react";

const _render = (renderer, Component, props = {}) =>
    renderer(<Component {...props} />);

// export const mountRender = (...args) => _render(mount, ...args);
// export const shallowRender = (...args) => _render(shallow, ...args);
export const testRender = (...args) => _render(render, ...args).container.firstChild;
