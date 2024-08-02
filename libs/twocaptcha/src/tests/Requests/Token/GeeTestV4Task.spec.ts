import { GeeTestV4Task } from "../../../lib/Requests/Token/GeeTestV4Task";

describe("GeeTestV4Task", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4Task({
      initParameters: { captcha_id: "some-captcha_id" },
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isGeeTestTask: true,
      challenge: undefined,
      geetestApiServerSubdomain: undefined,
      gt: undefined,
      initParameters: { captcha_id: "some-captcha_id" },
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      userAgent: "some-userAgent",
      version: 4,
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new GeeTestV4Task({
      initParameters: { captcha_id: "some-captcha_id" },
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isGeeTestTask: true,
      challenge: undefined,
      geetestApiServerSubdomain: undefined,
      gt: undefined,
      initParameters: { captcha_id: "some-captcha_id" },
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      type: "GeeTestTask",
      userAgent: undefined,
      version: 4,
      websiteURL: "some-websiteURL"
    });
  });
});
