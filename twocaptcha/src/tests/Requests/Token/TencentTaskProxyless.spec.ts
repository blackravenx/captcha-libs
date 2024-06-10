import { TencentTaskProxyless } from "../../../lib/Requests/Token/TencentTaskProxyless";

describe("TencentTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new TencentTaskProxyless({
      appId: "some-appId",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTencentTaskProxyless: true,
      appId: "some-appId",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "TencentTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new TencentTaskProxyless({
      appId: "some-appId",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isTencentTaskProxyless: true,
      appId: "some-appId",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "TencentTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
});
