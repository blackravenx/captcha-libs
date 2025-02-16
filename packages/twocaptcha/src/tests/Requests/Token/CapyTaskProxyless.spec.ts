import { CapyTaskProxyless } from "../../../lib/Requests/Token/CapyTaskProxyless";

import { expect, it, describe } from "vitest";

describe("CapyTaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new CapyTaskProxyless({
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isCapyTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "CapyTaskProxyless",
      "userAgent": "some-userAgent",
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new CapyTaskProxyless({
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isCapyTaskProxyless": true,
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "CapyTaskProxyless",
      "userAgent": undefined,
      "websiteKey": "some-websiteKey",
      "websiteURL": "some-websiteURL"
    });
  });
});
