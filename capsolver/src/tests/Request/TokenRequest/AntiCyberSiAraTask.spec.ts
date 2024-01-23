import { AntiCyberSiAraTask } from "../../../lib/Request/TokenRequest/AntiCyberSiAraTask";

describe("AntiCyberSiAraTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTask({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      proxy: "proxy",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      proxy: "proxy",
      type: "AntiCyberSiAraTask",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
});
