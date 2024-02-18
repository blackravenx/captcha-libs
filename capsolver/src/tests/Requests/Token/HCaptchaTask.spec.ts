import { HCaptchaTask } from "../../../lib/Requests/Token/HCaptchaTask";

describe("HCaptchaTask test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTask({
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isHCaptchaTask: true,
      enterprisePayload: { s: "SOME_ADDITIONAL_TOKEN" },
      isInvisible: false,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "HCaptchaTask",
      userAgent: "some-userAgent",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTask({
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });

    expect(task).toEqual({
      _endpoint: "createTask",
      _isHCaptchaTask: true,
      enterprisePayload: undefined,
      isInvisible: false,
      proxy: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "HCaptchaTask",
      userAgent: undefined,
      websiteKey: "some-websiteKey",
      websiteURL: "https://some-url.com"
    });
  });
});
