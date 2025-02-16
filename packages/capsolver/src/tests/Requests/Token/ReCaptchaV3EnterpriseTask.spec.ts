import { ReCaptchaV3EnterpriseTask } from "../../../lib/Requests/Token/ReCaptchaV3EnterpriseTask";

import { expect, it, describe } from "vitest";

describe("ReCaptchaV3EnterpriseTask", () => {
  it("To be equal to object", () => {
    const task = new ReCaptchaV3EnterpriseTask({
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
      "minScore": 0.7,
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
      "_isReCaptchaV3EnterpriseTask": true,
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
      "minScore": 0.7,
      "pageAction": "some-action",
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "ReCaptchaV3EnterpriseTask",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new ReCaptchaV3EnterpriseTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "pageAction": "some-action",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isReCaptchaV3EnterpriseTask": true,
      "apiDomain": undefined,
      "cookies": undefined,
      "enterprisePayload": undefined,
      "minScore": undefined,
      "pageAction": "some-action",
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "ReCaptchaV3EnterpriseTask",
      "userAgent": undefined,
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });
});
