import { FunCaptchaTaskProxyLess } from "../../../lib/Request/TokenRequest/FunCaptchaTaskProxyLess";

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
      data: undefined,
      funcaptchaApiJSSubdomain: undefined,
      proxy: undefined,
      type: "FunCaptchaTaskProxyLess",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
});
