import { GeeTestV3TaskProxyless } from "../../../lib/Requests/Token/GeeTestV3TaskProxyless";

import { expect, it, describe } from "vitest";

describe("GeeTestV3TaskProxyless", () => {
  it("To be equal to object", () => {
    const task = new GeeTestV3TaskProxyless({
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "some-geetestApiServerSubdomain",
      "gt": "some-gt",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTaskProxyless": true,
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "some-geetestApiServerSubdomain",
      "gt": "some-gt",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "GeeTestTaskProxyless",
      "userAgent": "some-userAgent",
      "version": 3,
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new GeeTestV3TaskProxyless({
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": undefined,
      "gt": "some-gt",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTaskProxyless": true,
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": undefined,
      "gt": "some-gt",
      "proxyAddress": undefined,
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": undefined,
      "proxyType": undefined,
      "type": "GeeTestTaskProxyless",
      "userAgent": undefined,
      "version": 3,
      "websiteURL": "some-websiteURL"
    });
  });
});
