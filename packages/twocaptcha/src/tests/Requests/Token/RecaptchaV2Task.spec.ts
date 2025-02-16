import { RecaptchaV2Task } from "../../../lib/Requests/Token/RecaptchaV2Task";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2Task", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2Task({
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "isInvisible": false,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV2Task": true,
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "isInvisible": false,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "type": "RecaptchaV2Task",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2Task({
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV2Task": true,
      "apiDomain": undefined,
      "cookies": undefined,
      "enterprisePayload": undefined,
      "isInvisible": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "type": "RecaptchaV2Task",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
