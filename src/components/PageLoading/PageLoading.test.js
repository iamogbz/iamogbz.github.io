import { testRender } from "../../utils/testRenderers";
import PageLoading from "./index";

describe("<PageLoading />", () => {
    it("should match snapshot", () => {
        const renderedComponent = testRender(PageLoading);
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should match snapshot when there is an error", () => {
        const renderedComponent = testRender(PageLoading, { error: true });
        expect(renderedComponent).toMatchSnapshot();
    });

    it("should match snapshot when past delay", () => {
        const renderedComponent = testRender(PageLoading, { pastDelay: true });
        expect(renderedComponent).toMatchSnapshot();
    });
});
