import { AtbCaptchaTaskProxyless } from "../../../lib/Requests/Token/AtbCaptchaTaskProxyless";

describe("AtbCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new AtbCaptchaTaskProxyless({
      apiServer: "some-apiServer",
      appId: "some-appId",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isAtbCaptchaTaskProxyless: true,
      apiServer: "some-apiServer",
      appId: "some-appId",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "AtbCaptchaTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AtbCaptchaTaskProxyless({
      apiServer: "some-apiServer",
      appId: "some-appId",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isAtbCaptchaTaskProxyless: true,
      apiServer: "some-apiServer",
      appId: "some-appId",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "AtbCaptchaTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
});
