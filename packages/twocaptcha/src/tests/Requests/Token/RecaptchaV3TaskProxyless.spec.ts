import { RecaptchaV3TaskProxyless } from "../../../lib/Requests/Token/RecaptchaV3TaskProxyless";

import { expect, it, describe } from "vitest";

describe("RecaptchaV3TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV3TaskProxyless({
      "apiDomain": "some-apiDomain",
      "isEnterprise": true,
      "minScore": 0.5,
      "pageAction": "some-pageAction",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV3TaskProxyless": true,
      "apiDomain": "some-apiDomain",
      "isEnterprise": true,
      "minScore": 0.5,
      "pageAction": "some-pageAction",
      "type": "RecaptchaV3TaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV3TaskProxyless({
      "minScore": 0.5,
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV3TaskProxyless": true,
      "apiDomain": undefined,
      "isEnterprise": undefined,
      "minScore": 0.5,
      "pageAction": undefined,
      "type": "RecaptchaV3TaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
