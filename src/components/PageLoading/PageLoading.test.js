import { shallowRender } from "../../utils/testRenderers";
import PageLoading from "./index";

describe("<PageLoading />", () => {
    it("should match snapshot", () => {
        const renderedComponent = shallowRender(PageLoading);
        expect(renderedComponent.debug()).toMatchSnapshot();
    });

    it("should match snapshot when there is an error", () => {
        const renderedComponent = shallowRender(PageLoading, { error: true });
        expect(renderedComponent.debug()).toMatchSnapshot();
    });

    it("should match snapshot when past delay", () => {
        const renderedComponent = shallowRender(PageLoading, { pastDelay: true });
        expect(renderedComponent.debug()).toMatchSnapshot();
    });
});
