import { RecaptchaV2EnterpriseTask } from "../../../lib/Requests/Token/RecaptchaV2EnterpriseTask";

import { expect, it, describe } from "vitest";

describe("RecaptchaV2EnterpriseTask", () => {
  it("To be equal to object", () => {
    const task = new RecaptchaV2EnterpriseTask({
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "enterprisePayload": { "value": "some-enterprisePayload" },
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
      "_isRecaptchaV2EnterpriseTask": true,
      "apiDomain": "some-apiDomain",
      "cookies": "some-cookies",
      "enterprisePayload": { "value": "some-enterprisePayload" },
      "isInvisible": false,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "type": "RecaptchaV2EnterpriseTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new RecaptchaV2EnterpriseTask({
      "proxyAddress": "some-proxyAddress",
      "proxyPort": 1010,
      "proxyType": "http",
      "recaptchaDataSValue": "some-recaptchaDataSValue",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isRecaptchaV2EnterpriseTask": true,
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
      "type": "RecaptchaV2EnterpriseTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
