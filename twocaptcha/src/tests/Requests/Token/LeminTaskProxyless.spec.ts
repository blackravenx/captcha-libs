import { LeminTaskProxyless } from "../../../lib/Requests/Token/LeminTaskProxyless";

describe("LeminTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new LeminTaskProxyless({
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: "some-leminApiServerSubdomain",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isLeminTaskProxyless: true,
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: "some-leminApiServerSubdomain",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "LeminTaskProxyless",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new LeminTaskProxyless({
      captchaId: "some-captchaId",
      divId: "some-divId",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isLeminTaskProxyless: true,
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: undefined,
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      proxyType: undefined,
      type: "LeminTaskProxyless",
      websiteURL: "some-websiteURL"
    });
  });
});
