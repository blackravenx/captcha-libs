import { MtCaptchaTaskProxyless } from "../../../lib/Requests/Token/MtCaptchaTaskProxyless";

import { expect, it, describe } from "vitest";

describe("MtCaptchaTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new MtCaptchaTaskProxyless({
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isMtCaptchaTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "MtCaptchaTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new MtCaptchaTaskProxyless({
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isMtCaptchaTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "MtCaptchaTaskProxyless",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
