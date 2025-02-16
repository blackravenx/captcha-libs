import { GeeTestV4TaskProxyless } from "../../../lib/Requests/Token/GeeTestV4TaskProxyless";

import { expect, it, describe } from "vitest";

describe("GeeTestV4TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV4TaskProxyless({
      "initParameters": { "captcha_id": "some-captcha_id" },
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTaskProxyless": true,
      "challenge": undefined,
      "geetestApiServerSubdomain": undefined,
      "gt": undefined,
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "GeeTestTaskProxyless",
      "userAgent": "some-userAgent",
      "version": 4,
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new GeeTestV4TaskProxyless({
      "initParameters": { "captcha_id": "some-captcha_id" },
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTaskProxyless": true,
      "challenge": undefined,
      "geetestApiServerSubdomain": undefined,
      "gt": undefined,
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "GeeTestTaskProxyless",
      "userAgent": undefined,
      "version": 4,
      "websiteURL": "some-websiteURL"
    });
  });
});
