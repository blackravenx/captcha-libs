import { ReCaptchaV2EnterpriseTask } from "../../../lib/Requests/Token/ReCaptchaV2EnterpriseTask";

import { expect, it, describe } from "vitest";

describe("ReCaptchaV2EnterpriseTask", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV2EnterpriseTask({
      "apiDomain": "https://some-api-domain.com",
      "cookies": [
        {
          "name": "Cookie name",
          "value": "Cookie value"
        },
        {
          "name": "Cookie 2 name",
          "value": "Cookie 2 value"
        }
      ],
      "enterprisePayload": { "s": "SOME_ADDITIONAL_TOKEN" },
      "isInvisible": false,
      "pageAction": "some-action",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",

      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isReCaptchaV2EnterpriseTask": true,
      "apiDomain": "https://some-api-domain.com",
      "cookies": [
        {
          "name": "Cookie name",
          "value": "Cookie value"
        },
        {
          "name": "Cookie 2 name",
          "value": "Cookie 2 value"
        }
      ],
      "enterprisePayload": { "s": "SOME_ADDITIONAL_TOKEN" },
      "isInvisible": false,
      "pageAction": "some-action",
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "ReCaptchaV2EnterpriseTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV2EnterpriseTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isReCaptchaV2EnterpriseTask": true,
      "apiDomain": undefined,
      "cookies": undefined,
      "enterprisePayload": undefined,
      "isInvisible": false,
      "pageAction": undefined,
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "ReCaptchaV2EnterpriseTask",
      "userAgent": undefined,
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });
});
