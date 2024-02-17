import { FunCaptchaTaskProxyLess } from "../../../lib/Requests/Token/FunCaptchaTaskProxyLess";

describe("FunCaptchaTaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTaskProxyLess({
      data: "some-data",
      funcaptchaApiJSSubdomain: "https://some-api-domain.com",
      proxy: "proxy",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isFunCaptchaTaskProxyLess: true,
      data: "some-data",
      funcaptchaApiJSSubdomain: "https://some-api-domain.com",
      proxy: "proxy",
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
      funcaptchaApiJSSubdomain: undefined,
      proxy: undefined,
      type: "FunCaptchaTaskProxyLess",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
});
