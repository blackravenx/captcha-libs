import { LeminTask } from "../../../lib/Requests/Token/LeminTask";

describe("LeminTask", () => {
  it("To be equal to object", () => {
    const task = new LeminTask({
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: "some-leminApiServerSubdomain",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isLeminTask: true,
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: "some-leminApiServerSubdomain",
      proxyAddress: "some-proxyAddress",
      proxyLogin: "some-proxyLogin",
      proxyPassword: "some-proxyPassword",
      proxyPort: 1010,
      proxyType: "http",
      type: "LeminTask",
      userAgent: "some-userAgent",
      websiteURL: "some-websiteURL"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new LeminTask({
      captchaId: "some-captchaId",
      divId: "some-divId",
      proxyAddress: "some-proxyAddress",
      proxyPort: 1010,
      proxyType: "http",
      websiteURL: "some-websiteURL"
    });

    expect(task).toEqual({
      _isLeminTask: true,
      captchaId: "some-captchaId",
      divId: "some-divId",
      leminApiServerSubdomain: undefined,
      proxyAddress: "some-proxyAddress",
      proxyLogin: undefined,
      proxyPassword: undefined,
      proxyPort: 1010,
      proxyType: "http",
      type: "LeminTask",
      websiteURL: "some-websiteURL"
    });
  });
});
