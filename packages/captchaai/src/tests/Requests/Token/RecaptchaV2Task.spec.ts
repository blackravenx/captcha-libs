import { RecaptchaV2Task } from "../../../lib/Requests/Token/RecaptchaV2Task";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2Task", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2Task({
      "cookies": "some-cookies",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "invisible": false,
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isRecaptchaV2Task": true,
      "cookies": "some-cookies",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "invisible": false,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "RecaptchaV2Task",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2Task({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isRecaptchaV2Task": true,
      "cookies": undefined,
      "domain": undefined,
      "googlekey": "some-googlekey",
      "invisible": undefined,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "RecaptchaV2Task",
      "userAgent": "some-userAgent"
    });
  });
});
