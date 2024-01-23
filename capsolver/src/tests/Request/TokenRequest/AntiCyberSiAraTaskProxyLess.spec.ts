import { AntiCyberSiAraTaskProxyLess } from "../../../lib/Request/TokenRequest/AntiCyberSiAraTaskProxyLess";

describe("AntiCyberSiAraTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new AntiCyberSiAraTaskProxyLess({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      SlideMasterUrlId: "some-SlideMasterUrlId",
      type: "AntiCyberSiAraTaskProxyLess",
      userAgent: "some-userAgent",
      websiteURL: "https://some-url.com"
    });
  });
});
