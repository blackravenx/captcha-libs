import { AntiImpervaTask } from "../../../lib/Request/TokenRequest/AntiImpervaTask";

describe("AntiImpervaTask", () => {
  it("To be equal to object", () => {
    const task = new AntiImpervaTask({
      proxy: "proxy",
      reese84: true,
      reeseScriptUrl: "some-reeseScriptUrl",
      reeseToken: "some-reeseToken",
      userAgent: "some-userAgent",
      utmvc: true,
      websiteUrl: "https://some-url.com"
    });

    expect(task).toEqual({
      proxy: "proxy",
      reese84: true,
      reeseScriptUrl: "some-reeseScriptUrl",
      reeseToken: "some-reeseToken",
      type: "AntiImpervaTask",
      userAgent: "some-userAgent",
      utmvc: true,
      websiteUrl: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiImpervaTask({
      proxy: "proxy",
      userAgent: "some-userAgent",
      websiteUrl: "https://some-url.com"
    });

    expect(task).toEqual({
      proxy: "proxy",
      reese84: false,
      reeseScriptUrl: undefined,
      reeseToken: undefined,
      type: "AntiImpervaTask",
      userAgent: "some-userAgent",
      utmvc: false,
      websiteUrl: "https://some-url.com"
    });
  });
});
