import { FunCaptchaTaskProxyLess } from "../../../lib/Requests/Token/FunCaptchaTaskProxyLess";

describe("FunCaptchaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTaskProxyLess({
      data: "some-data",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isFunCaptchaTaskProxyLess: true,
      data: "some-data",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "FunCaptchaTaskProxyLess",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new FunCaptchaTaskProxyLess({
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isFunCaptchaTaskProxyLess: true,
      data: undefined,
      proxy: undefined,
      type: "FunCaptchaTaskProxyLess",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
});
