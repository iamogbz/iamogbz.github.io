import React from "react";
import { shallowRender } from "../../utils/testRenderers";
import PageLoading from ".";

describe("<PageLoading />", () => {
    it("should match snapshot", () => {
        const renderedComponent = shallowRender(<PageLoading />);
        expect(renderedComponent.debug()).toMatchSnapshot();
    });

    it("should match snapshot when there is an error", () => {
        const renderedComponent = shallowRender(<PageLoading error />);
        expect(renderedComponent.debug()).toMatchSnapshot();
    });

    it("should match snapshot when past delay", () => {
        const renderedComponent = shallowRender(<PageLoading pastDelay />);
        expect(renderedComponent.debug()).toMatchSnapshot();
    });
});
