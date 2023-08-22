// eslint-disable-next-line @typescript-eslint/no-var-requires
const handler = require("./handler");

describe("handler", () => {
  it("exports api", () => {
    expect(handler).toMatchInlineSnapshot(`
{
  "hello": [Function],
}
`);
  });
});
