import { RecaptchaV3TaskProxyless } from "../../../lib/Requests/Token/RecaptchaV3TaskProxyless";

import { expect, it, describe } from "vitest";

describe("RecaptchaV3TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV3TaskProxyless({
      "action": "some-action",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "min_score": 0.3,
      "pageurl": "some-pageurl"
    });

    expect(task).toEqual({
      "_isRecaptchaV3TaskProxyless": true,
      "action": "some-action",
      "domain": "some-domain",
      "googlekey": "some-googlekey",
      "method": "userrecaptcha",
      "min_score": 0.3,
      "pageurl": "some-pageurl",
      "type": "RecaptchaV3TaskProxyless",
      "version": "v3"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV3TaskProxyless({
      "googlekey": "some-googlekey",
      "pageurl": "some-pageurl"
    });

    expect(task).toEqual({
      "_isRecaptchaV3TaskProxyless": true,
      "action": undefined,
      "domain": undefined,
      "googlekey": "some-googlekey",
      "method": "userrecaptcha",
      "min_score": undefined,
      "pageurl": "some-pageurl",
      "type": "RecaptchaV3TaskProxyless",
      "version": "v3"
    });
  });
});
