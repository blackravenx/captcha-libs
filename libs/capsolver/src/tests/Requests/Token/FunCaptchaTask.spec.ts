import { FunCaptchaTask } from "../../../lib/Requests/Token/FunCaptchaTask";

describe("FunCaptchaTask", () => {
  it("To be equal to object", () => {
    const task = new FunCaptchaTask({
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
      _isFunCaptchaTask: true,
      data: "some-data",
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "FunCaptchaTask",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new FunCaptchaTask({
      proxy: "some-proxy",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isFunCaptchaTask: true,
      data: undefined,
      proxy: "some-proxy",
      proxyAddress: undefined,
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: undefined,
      type: "FunCaptchaTask",
      websitePublicKey: "some-websitePublicKey",
      websiteURL: "https://some-url.com"
    });
  });
});
