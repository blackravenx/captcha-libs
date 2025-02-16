import { HCaptchaTaskProxyLess } from "../../../lib/Requests/Token/HCaptchaTaskProxyLess";

import { expect, it, describe } from "vitest";

describe("HCaptchaTaskProxyLess test", () => {
  it("To be equal to object", () => {
    const task = new HCaptchaTaskProxyLess({
      "enterprisePayload": { "s": "SOME_ADDITIONAL_TOKEN" },
      "isInvisible": false,
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isHCaptchaTaskProxyLess": true,
      "enterprisePayload": { "s": "SOME_ADDITIONAL_TOKEN" },
      "isInvisible": false,
      "type": "HCaptchaTaskProxyLess",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new HCaptchaTaskProxyLess({
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isHCaptchaTaskProxyLess": true,
      "enterprisePayload": undefined,
      "isInvisible": false,
      "type": "HCaptchaTaskProxyLess",
      "userAgent": undefined,
      "websiteKey": "some-websiteKey",
      "websiteURL": "https://some-url.com"
    });
  });
});
