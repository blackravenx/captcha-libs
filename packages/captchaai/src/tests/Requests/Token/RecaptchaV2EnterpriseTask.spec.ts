import { RecaptchaV2EnterpriseTask } from "../../../lib/Requests/Token/RecaptchaV2EnterpriseTask";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2EnterpriseTask", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2EnterpriseTask({
      "cookies": "some-cookies",
      "domain": "some-domain",
      "enterprisePayload": { "s": "some-s" },
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
      "_isRecaptchaV2EnterpriseTask": true,
      "cookies": "some-cookies",
      "domain": "some-domain",
      "enterprisePayload": { "s": "some-s" },
      "googlekey": "some-googlekey",
      "invisible": false,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "RecaptchaV2EnterpriseTask",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2EnterpriseTask({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http"
    });

    expect(task).toEqual({
      "_isRecaptchaV2EnterpriseTask": true,
      "cookies": undefined,
      "domain": undefined,
      "enterprisePayload": undefined,
      "googlekey": "some-googlekey",
      "invisible": undefined,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "RecaptchaV2EnterpriseTask",
      "userAgent": undefined
    });
  });
});
