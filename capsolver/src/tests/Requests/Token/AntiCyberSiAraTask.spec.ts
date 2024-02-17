import { AntiCyberSiAraTask } from "../../../lib/Requests/Token/AntiCyberSiAraTask";

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
      _endpoint: "createTask",
      _isAntiCyberSiAraTask: true,
      proxy: "proxy",
      type: "AntiCyberSiAraTask",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
});
