import React from "react";
// import { mount, shallow } from "enzyme";
import { render } from "@testing-library/react";

const renderWith = (renderer, Component, props = {}) =>
    renderer(<Component {...props} />);

// export const mountRender = (...args) => _render(mount, ...args);
// export const shallowRender = (...args) => _render(shallow, ...args);
export const testRender = (...args) =>
    renderWith(render, ...args).container.firstChild;
