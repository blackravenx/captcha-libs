import { GeeTestTaskProxyless } from "../../../lib/Requests/Token/GeeTestTaskProxyless";

import { expect, it, describe } from "vitest";

describe("GeeTestTaskProxyless", () => {
  it("To be equal to object with version = 3", () => {
    const task = new GeeTestTaskProxyless({
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
      "initParameters": undefined,
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

  it("To be equal to object with version = 3, without optional params", () => {
    const task = new GeeTestTaskProxyless({
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
      "initParameters": undefined,
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

  it("To be equal to object with version = 4", () => {
    const task = new GeeTestTaskProxyless({
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

  it("To be equal to object with version = 4, without optional params", () => {
    const task = new GeeTestTaskProxyless({
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
