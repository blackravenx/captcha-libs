import { AntiCyberSiAraTaskProxyLess } from "../../../lib/Requests/Token/AntiCyberSiAraTaskProxyLess";

describe("AntiCyberSiAraTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTaskProxyLess({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      _endpoint: "createTask",
      _isAntiCyberSiAraTaskProxyLess: true,
      type: "AntiCyberSiAraTaskProxyLess",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
});
