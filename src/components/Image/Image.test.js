import { testRender } from "utils/testRenderers";
import Image from "./index";

describe("Image", () => {
    const render = (props = {}) => testRender(Image, props);

    it("renders with default type", () => {
        expect(render({ name: "test" })).toMatchSnapshot();
    });
});
