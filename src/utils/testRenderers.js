import React from "react";
import { mount, shallow } from "enzyme";

const render = (renderer, Component, props = {}) =>
    renderer(<Component {...props} />);

export const mountRender = (...args) => render(mount, ...args);
export const shallowRender = (...args) => render(shallow, ...args);
