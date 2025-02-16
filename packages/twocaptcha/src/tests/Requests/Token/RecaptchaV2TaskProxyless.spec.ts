import { RecaptchaV2TaskProxyless } from "../../../lib/Requests/Token/RecaptchaV2TaskProxyless";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2TaskProxyless({
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "isInvisible": false,
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV2TaskProxyless": true,
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "isInvisible": false,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "type": "RecaptchaV2TaskProxyless",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2TaskProxyless({
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV2TaskProxyless": true,
      "apiDomain": undefined,
      "cookies": undefined,
      "isInvisible": undefined,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "type": "RecaptchaV2TaskProxyless",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
