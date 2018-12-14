import { shallowRender } from "utils/testRenderers";
import Image from "./index";

describe("Image", () => {
    const shallow = (props = {}) => shallowRender(Image, props);

    it("renders with default type", () => {
        expect(shallow({ name: "test" }).debug()).toMatchSnapshot();
    });
});
