import { RecaptchaV2TaskProxyless } from "../../../lib/Requests/Token/RecaptchaV2TaskProxyless";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2TaskProxyless({
      "cookies": "some-cookies",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "invisible": false,
      "pageurl": "some-pageurl",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isRecaptchaV2TaskProxyless": true,
      "cookies": "some-cookies",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "invisible": false,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "RecaptchaV2TaskProxyless",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2TaskProxyless({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isRecaptchaV2TaskProxyless": true,
      "cookies": undefined,
      "domain": undefined,
      "googlekey": "some-googlekey",
      "invisible": undefined,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "RecaptchaV2TaskProxyless",
      "userAgent": "some-userAgent"
    });
  });
});
