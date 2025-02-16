import { GeeTestV4TaskProxyLess } from "../../../lib/Requests/Token/GeeTestV4TaskProxyLess";

import { expect, it, describe } from "vitest";

describe("GeeTestV4TaskProxyLess", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4TaskProxyLess({
      "captchaId": "some-captchaId",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isGeeTestTaskProxyLess": true,
      "captchaId": "some-captchaId",
      "type": "GeeTestTaskProxyLess",
      "websiteURL": "https://some-url.com"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new GeeTestV4TaskProxyLess({
      "captchaId": "some-captchaId",
      "websiteURL": "https://some-url.com"
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isGeeTestTaskProxyLess": true,
      "captchaId": "some-captchaId",
      "type": "GeeTestTaskProxyLess",
      "websiteURL": "https://some-url.com"
    });
  });
});
