import React from "react";

import { shallowRender } from "utils/testRenderers";
import Image from ".";

describe("Image", () => {
    const shallow = (props = {}) => shallowRender(<Image {...props} />).debug();

    it("renders with default type", () => {
        expect(shallow({ name: "test" })).toMatchSnapshot();
    });
});
