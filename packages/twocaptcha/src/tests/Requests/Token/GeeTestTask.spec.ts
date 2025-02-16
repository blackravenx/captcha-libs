import { GeeTestTask } from "../../../lib/Requests/Token/GeeTestTask";

import { expect, it, describe } from "vitest";

describe("GeeTestTask", () => {
  it("To be equal to object with version = 3", () => {
    const task = new GeeTestTask({
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "some-geetestApiServerSubdomain",
      "gt": "some-gt",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTask": true,
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": "some-geetestApiServerSubdomain",
      "gt": "some-gt",
      "initParameters": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "GeeTestTask",
      "userAgent": "some-userAgent",
      "version": 3,
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object with version = 3, without optional params", () => {
    const task = new GeeTestTask({
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": undefined,
      "gt": "some-gt",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTask": true,
      "challenge": "some-challenge",
      "geetestApiServerSubdomain": undefined,
      "gt": "some-gt",
      "initParameters": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "GeeTestTask",
      "userAgent": undefined,
      "version": 3,
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object with version = 4", () => {
    const task = new GeeTestTask({
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTask": true,
      "challenge": undefined,
      "geetestApiServerSubdomain": undefined,
      "gt": undefined,
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "GeeTestTask",
      "userAgent": "some-userAgent",
      "version": 4,
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object with version = 4, without optional params", () => {
    const task = new GeeTestTask({
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isGeeTestTask": true,
      "challenge": undefined,
      "geetestApiServerSubdomain": undefined,
      "gt": undefined,
      "initParameters": { "captcha_id": "some-captcha_id" },
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "GeeTestTask",
      "userAgent": undefined,
      "version": 4,
      "websiteURL": "some-websiteURL"
    });
  });
});
