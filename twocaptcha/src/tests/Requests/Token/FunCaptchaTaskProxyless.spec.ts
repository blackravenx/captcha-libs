import { FunCaptchaTaskProxyless } from "../../../lib/Requests/Token/FunCaptchaTaskProxyless";

describe("FunCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTaskProxyless({
      data: "some-data",
      funcaptchaApiJSSubdomain: "some-funcaptchaApiJSSubdomain",
      userAgent: "some-userAgent",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isFunCaptchaTaskProxyless: true,
      data: "some-data",
      funcaptchaApiJSSubdomain: "some-funcaptchaApiJSSubdomain",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "FunCaptchaTaskProxyless",
      userAgent: "some-userAgent",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new FunCaptchaTaskProxyless({
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isFunCaptchaTaskProxyless: true,
      data: undefined,
      funcaptchaApiJSSubdomain: undefined,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "FunCaptchaTaskProxyless",
      userAgent: undefined,
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });
  });
});
