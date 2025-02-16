import { HCaptchaTaskProxyless } from "../../../lib/Requests/Token/HCaptchaTaskProxyless";

import { expect, it, describe } from "vitest";

describe("HCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTaskProxyless({
      "enterprisePayload": { "rqdata": "test_string" },
      "isInvisible": false,
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isHCaptchaTaskProxyless": true,
      "enterprisePayload": { "rqdata": "test_string" },
      "isInvisible": false,
      "type": "HCaptchaTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTaskProxyless({
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isHCaptchaTaskProxyless": true,
      "enterprisePayload": undefined,
      "isInvisible": undefined,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "HCaptchaTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
