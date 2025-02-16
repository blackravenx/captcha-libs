import { GeeTestV3TaskProxyLess } from "../../../lib/Requests/Token/GeeTestV3TaskProxyLess";

import { expect, it, describe } from "vitest";

describe("GeeTestV3TaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3TaskProxyLess({
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "https://some-api-domain.com",
      "gt": "some-gt",
      "userAgent": "some-userAgent",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isGeeTestTaskProxyLess": true,
      "captchaId": undefined,
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "https://some-api-domain.com",
      "gt": "some-gt",
      "proxy": undefined,
      "type": "GeeTestTaskProxyLess",
      "userAgent": "some-userAgent",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3TaskProxyLess({
      "challenge": "some-challenge",
      "gt": "some-gt",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isGeeTestTaskProxyLess": true,
      "challenge": "some-challenge",
      "gt": "some-gt",
      "type": "GeeTestTaskProxyLess",
      "websiteURL": "https://some-url.com"
    });
  });
});
