import { MainApp } from "./main";

describe("main", () => {
  it("exports main app", () => {
    expect(MainApp.tagName).toEqual("main-app");
  });
});
