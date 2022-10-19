import routes from "../routes";

describe("Routes", () => {
    it("matches render snapshot", () => {
        expect(routes).toMatchSnapshot();
    });
});
