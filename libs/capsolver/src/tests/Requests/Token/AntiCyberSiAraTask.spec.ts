import { AntiCyberSiAraTask } from "../../../lib/Requests/Token/AntiCyberSiAraTask";

describe("AntiCyberSiAraTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTask({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      _endpoint: "createTask",
      _isAntiCyberSiAraTask: true,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "AntiCyberSiAraTask",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
});
