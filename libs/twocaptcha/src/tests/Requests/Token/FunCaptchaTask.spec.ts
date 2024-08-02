import { FunCaptchaTask } from "../../../lib/Requests/Token/FunCaptchaTask";

describe("FunCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTask({
      data: "some-data",
      funcaptchaApiJSSubdomain: "some-funcaptchaApiJSSubdomain",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isFunCaptchaTask: true,
      data: "some-data",
      funcaptchaApiJSSubdomain: "some-funcaptchaApiJSSubdomain",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "FunCaptchaTask",
      userAgent: "some-userAgent",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new FunCaptchaTask({
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isFunCaptchaTask: true,
      data: undefined,
      funcaptchaApiJSSubdomain: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      type: "FunCaptchaTask",
      userAgent: undefined,
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "some-websiteURL"
    });
  });
});
