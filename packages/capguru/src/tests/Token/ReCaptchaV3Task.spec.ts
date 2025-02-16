import { ReCaptchaV3Task } from "../../lib/Request/Token/ReCaptchaV3Task";

import { expect, it, describe } from "vitest";

describe("ReCaptchaV3Task Test", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV3Task({
      "cookies": "some-cookies",
      "data-s": "some-data-s",
      "googlekey": "some-googlekey",
      "min_score": 0.5,
      "pageurl": "some-pageurl",
      "proxy": "some-proxy",
      "proxyType": "HTTP",
      "userAgent": "some-userAgent"

    });

    expect(task).toEqual({
      "cookies": "some-cookies",
      "data-s": "some-data-s",
      "googlekey": "some-googlekey",
      "isString": true,
      "method": "userrecaptcha",
      "min_score": 0.5,
      "pageurl": "some-pageurl",
      "proxy": "some-proxy",
      "proxyType": "HTTP",
      "userAgent": "some-userAgent",
      "version": "v3"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV3Task({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl"
    });

    expect(task).toEqual({
      "cookies": undefined,
      "data-s": undefined,
      "googlekey": "some-googlekey",
      "isString": true,
      "method": "userrecaptcha",
      "min_score": undefined,
      "pageurl": "some-pageurl",
      "proxy": undefined,
      "proxyType": undefined,
      "userAgent": undefined,
      "version": "v3"
    });
  });
});
