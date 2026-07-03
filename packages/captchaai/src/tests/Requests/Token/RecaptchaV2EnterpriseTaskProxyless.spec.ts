import { RecaptchaV2EnterpriseTaskProxyless } from "../../../lib/Requests/Token/RecaptchaV2EnterpriseTaskProxyless";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2EnterpriseTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2EnterpriseTaskProxyless({
      "cookies": "some-cookies",
      "domain": "some-domain",
      "enterprisePayload": { "s": "some-s" },
      "googlekey": "some-googlekey",
      "invisible": false,
      "pageurl": "some-pageurl",
      "userAgent": "some-userAgent"
    });

    expect(task).toEqual({
      "_isRecaptchaV2EnterpriseTaskProxyless": true,
      "cookies": "some-cookies",
      "domain": "some-domain",
      "enterprisePayload": { "s": "some-s" },
      "googlekey": "some-googlekey",
      "invisible": false,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "RecaptchaV2EnterpriseTaskProxyless",
      "userAgent": "some-userAgent"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2EnterpriseTaskProxyless({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl"
    });

    expect(task).toEqual({
      "_isRecaptchaV2EnterpriseTaskProxyless": true,
      "cookies": undefined,
      "domain": undefined,
      "enterprisePayload": undefined,
      "googlekey": "some-googlekey",
      "invisible": undefined,
      "method": "userrecaptcha",
      "pageurl": "some-pageurl",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "RecaptchaV2EnterpriseTaskProxyless",
      "userAgent": undefined
    });
  });
});
