import { ReCaptchaV2Task } from "../../lib/Request/Token/ReCaptchaV2Task";

describe("ReCaptchaV2Task Test", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2Task({
      cookies: "some-cookies",
      "data-s": "some-data-s",
      googlekey: "some-googlekey",
      pageurl: "some-pageurl",
      proxy: "some-proxy",
      proxyType: "HTTP",
      userAgent: "some-userAgent"
    });

    expect(task).toEqual({
      cookies: "some-cookies",
      "data-s": "some-data-s",
      googlekey: "some-googlekey",
      isString: true,
      method: "userrecaptcha",
      pageurl: "some-pageurl",
      proxy: "some-proxy",
      proxyType: "HTTP",
      userAgent: "some-userAgent",
      version: "v2"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV2Task({
      googlekey: "some-googlekey",
      pageurl: "some-pageurl"
    });

    expect(task).toEqual({
      cookies: undefined,
      "data-s": undefined,
      googlekey: "some-googlekey",
      isString: true,
      method: "userrecaptcha",
      pageurl: "some-pageurl",
      proxy: undefined,
      proxyType: undefined,
      userAgent: undefined,
      version: "v2"
    });
  });
});
